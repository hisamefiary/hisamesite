'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // #region 初期設定
  if ('speechSynthesis' in window) {
    console.log("音声合成に対応しているブラウザです")
  } else {
    alert("音声合成に対応していないブラウザです")
    console.log("音声合成に対応していないブラウザです")
  }
  const button_start = document.querySelector('#button_start')
  const input_mode = document.querySelector('#input_mode')
  const input_count = document.querySelector('#input_count')
  const input_count_plus = document.querySelector('#input_count_plus')
  const input_count_minus = document.querySelector('#input_count_minus')
  const input_text = document.querySelector('#input_text')
  const input_theme = document.querySelector("#input_theme")
  const input_voice = document.querySelector("#input_voice")
  const input_pitch = document.querySelector("#input_pitch")
  const input_rate = document.querySelector("#input_rate")
  const timelinedetails = document.querySelector("#timelinedetails")
  const timelinetbody = timelinedetails.querySelector("#timelinetable>tbody")
  const main = document.querySelector("body>main")
  const guide = document.getElementById("guide")
  // const video = document.getElementById('video');

  let load_voice_data
  let loadcheck = false
  let allmode = {}
  let voices//音声一覧
  let voice = {}//次再生する音声
  // #endregion
  // #region 汎用
  function エスケープ(string, lang) {//その言語にあったエスケープを行う
    let reg
    let patterns
    switch (lang) {
      case "html":
        reg = /[&'`"<>]/g
        patterns = {
          '<': '&lt;',
          '>': '&gt;',
          '&': '&amp;',
          '"': '&quot;',
          '\'': '&#x27;',
          '`': '&#x60;'
        };
        break;
      default:
        return string;
    }
    return string.replace(reg, match => patterns[match]);
  }
  function keys_time_sort(array) {//時間で並び替え
    return array.sort((a, b) => { return a["time"] - b["time"] })
  }
  // #endregion
  // #region タイマー管理
  let 実行ミリ秒 = 200
  let 実行関数リスト = []//実行する関数リスト
  function 実行関数追加(inname, infunc, inarg) {//funcをargでnameのところに追記、funcなければ削除
    実行関数リスト = 実行関数リスト.filter(obj => { obj["name"] !== inname })
    if (infunc) {
      if (inarg) {
        実行関数リスト.push({ name: inname, func: infunc, arg: inarg })
      } else {
        実行関数リスト.push({ name: inname, func: infunc })
      }
    }
  }
  function 常時タイマー() {//実行ミリ秒ごとに実行する、正確性はない
    実行関数リスト.forEach(element => {
      element["func"](element["arg"])
    })
    setTimeout(常時タイマー, 実行ミリ秒);
  }
  常時タイマー()
  function タイマー取得(time, cate) {//time時間からの経過cateを拾う
    const 経過ミリ秒 = Date.now() - time
    switch (cate) {
      case "経過秒":
        return Math.floor(経過ミリ秒 / (1000));
      default:
        const 経過秒 = Math.floor(経過ミリ秒 / (1000));
        const ミリ秒 = Math.floor(経過ミリ秒 % 1000);
        const 秒 = Math.floor(経過ミリ秒 / (1000) % 60);
        const 分 = Math.floor(経過ミリ秒 / (1000 * 60) % 60);
        const 時 = Math.floor(経過ミリ秒 / (1000 * 60 * 60));
        return "未定";
    }
  }
  function 秒分取得(string) {//どっちかを取得、マイナスも可
    let 秒数
    let 秒data
    if (string === undefined) { return 0 }
    if (string === "") { return 0 }

    秒data = string.match(/^(-?)([0-9]+)$/)
    if (秒data) {
      秒数 = Number(秒data[2])
      if (秒data[1] === "-") { 秒数 = 秒数 * -1 }
      return 秒数
    }

    秒data = string.match(/^(-?)([0-9]+):([0-9]+)$/)
    if (秒data) {
      秒数 = Number(秒data[2]) * 60 + Number(秒data[3])
      if (秒data[1] === "-") { 秒数 = 秒数 * -1 }
      return 秒数
    }
    throw "秒エラー"
  }
  // #endregion
  // #region テキスト読込
  // time無>無視
  // time有>time,text
  // time有>time,voice,voicetime
  // time有>time,text,voice,voicetime
  // 強制voicetime起動
  function スペスペ読込(string) {

    let before_array = []
    string.split(/[\r\n]/).forEach(element => {
      try {
        let number = element.match(/time="(-?[0-9]+(\.0)?)"/)
        if (number) {
          let next_data = {}
          next_data["time"] = Number(number[1])
          try { next_data["text"] = element.match(/text="([^"]+)"/)[1] } catch (error) { }
          try { next_data["voice"] = element.match(/notice= *?"([^"]+)"/)[1] } catch (error) { }
          before_array.push(next_data)
        } else {
          if (element.replace(/\s/g, "")) { console.warn("timeを正しく指定してください", element) }
        }
      } catch (error) {
        if (element.replace(/\s/g, "")) { console.warn("予期しないエラー", element) }
      }
    });
    function 一マスずらし(array) {
      try {
        let return_array = []
        let next__id = 0
        array.forEach((obj) => {
          let new_obj = structuredClone(obj)
          if (new_obj["voice"]) {
            new_obj["voicetime"] = next__id
          }
          next__id = new_obj["time"]
          return_array.push(new_obj)
        })
        return return_array
      } catch (error) {
        console.worm("予期しないエラー", string)
        return []
      }
    }
    before_array = keys_time_sort(before_array)
    let return_array = 一マスずらし(before_array)

    return return_array
  }
  // time無>無視
  // time有+voice無>time,text
  // time有+voice有>time,text,voice,voicetime
  function スプシ読込(string) {

    let before_array = []
    string.split(/[\r\n]/).forEach(element => {
      try {
        let match = element.match(/^(-?[0-9]+:[0-9]+|-?[0-9]+)\t([^\t]*?)\t([^\t]*?)\t(-?[0-9]+:[0-9]+|-?[0-9]+)?$/)
        if (match) {
          let time = 秒分取得(match[1])
          if (time) {
            let next_data = {}

            next_data["time"] = time
            next_data["text"] = match[2]

            if (match[3] !== "") {
              next_data["voicetime"] = time - 秒分取得(match[4])
              next_data["voice"] = match[3]
            }
            before_array.push(next_data)
          } else {
            console.warm("タイム取得エラー", element)
          }
        } else {
          if (element.replace(/\s/g, "")) {
            if (element.split(/\t/).length === 4) {
              console.warn("記入内容が正規で無いです", element)
            } else {
              console.warn("記入項目の数が4では無いか、タブ文字を項目に使っています", element)
            }
          }
        }
      } catch (error) {
        console.warm("予期しないエラー", element)
      }
    });

    let return_array = keys_time_sort(before_array)

    return return_array
  }
  // timeは必須タグ,voiceがある場合voicetimeは必須タグ
  function カウント作成(speak_array) {
    let before_array = structuredClone(speak_array)
    for (let index = 0; index <= 15; index++) {
      if (index === 0) {
        before_array.unshift({ time: -index, text: "戦闘開始", voicetime: -index, voice: "start" })
      } else if (index <= 5 || index == 10 || index == 15) {//5以下か10と15だけ通知
        before_array.unshift({ time: -index, text: index + '秒前', voicetime: -index, voice: index })
      } else {
        before_array.unshift({ time: -index, text: index + '秒前', voicetime: -index, voice: "" })
      }
    }
    let return_array = keys_time_sort(before_array)
    return return_array
  }
  // 必須タグを利用して反映しつつvoiceとtextに分離
  function ボイス分離反映(speak_array) {
    element_clear(timelinetbody)
    let text_array = []
    let voice_array = []

    speak_array.forEach((obj, index) => {
      let textobj = {}
      textobj["text"] = obj["text"]
      textobj["time"] = obj["time"]
      textobj["index"] = index;
      text_array.push(textobj)
      if (obj["voice"] !== undefined) {
        let voiceobj = {}
        voiceobj["text"] = obj["voice"]
        voiceobj["time"] = obj["voicetime"]
        voiceobj["index"] = index
        voice_array.push(voiceobj)
      }

      let tr = element_create("tr")
      tr.dataset.id = index
      let td0 = element_create("td", undefined, { "class": "now" })
      let td1 = element_create("td", undefined, { "class": "time" })
      let td2 = element_create("td", undefined, { "class": "text" })
      let td3 = element_create("td", undefined, { "class": "voice" })
      let td4 = element_create("td", undefined, { "class": "delay" })

      td0.dataset.timeid = obj["time"]
      td1.append(obj["time"])
      if (obj["text"] !== undefined) { td2.append(obj["text"]); }
      if (obj["voice"] !== undefined) { td3.append(obj["voice"]); td4.append(obj["time"] - obj["voicetime"]); } else {
        tr.dataset.voiceid = "none"
      }

      tr.append(td0, td1, td2, td3, td4)
      timelinetbody.append(tr)
    })
    voice_array = keys_time_sort(voice_array)
    text_array = keys_time_sort(text_array)
    return [text_array, voice_array]
  }
  function テキスト再読込() {

    let string = input_text.value

    guide.dataset.mode = input_mode.value

    let speak_array
    let voice_data
    switch (input_mode.value) {
      case "ffxivsupesupe":
        speak_array = スペスペ読込(string)
        speak_array = カウント作成(speak_array)
        voice_data = ボイス分離反映(speak_array)
        break;
      case "spreadsheets":
        speak_array = スプシ読込(string)
        speak_array = カウント作成(speak_array)
        voice_data = ボイス分離反映(speak_array)
        break;
      default:
        voice_data = [[], []]
        break;
    }
    load_voice_data = voice_data
  }
  // #endregion
  function テーマ切替() {//テーマ切り替え後に再読み込みするかは諸説
    let theme = input_theme.value
    switch (theme) {
      case "null":
        delete allmode["theme_timeline"]
        break;
      default:
        allmode["theme_timeline"] = "nomal"
        break;
    }
    main.dataset.theme_timeline = allmode["theme_timeline"]

  }
  // #region 再生停止関連
  function テキストタイマー開始(voice_data, input_count) {
    let now_voice_array = structuredClone(voice_data[1])//編集を禁止
    let now_text_array = structuredClone(voice_data[0])//編集を禁止
    let now_text_next = 0
    let now_voice_next = 0
    let trobj = {}
    実行関数追加("battlestart", 秒数再生, Date.now())//関数追加
    function 秒数再生(time) {
      const 経過秒 = タイマー取得(time, "経過秒") - input_count
      Object.keys(trobj).forEach(key => {
        let test = trobj[key].querySelector(".now")
        test.textContent = (test.dataset.timeid - 経過秒)
      })

      // console.debug(経過秒)
      now_voice_next = 処理(now_voice_array, now_voice_next, "voice")
      now_text_next = 処理(now_text_array, now_text_next, "text")
      function 処理(array, next, cate) {
        if (array.length > next) {
          let next_voice
          while (array[next]["time"] <= 経過秒) {

            // console.log(cate, array[next])

            try {
              let before = timelinetbody.querySelector('tr[data-id="' + array[next - 1]["index"] + '"]')
              if (before) { before.dataset[cate + "id"] = "before" }

            } catch { }
            try {
              let now = timelinetbody.querySelector('tr[data-id="' + array[next]["index"] + '"]')
              if (now) { now.dataset[cate + "id"] = "now" }
              if (cate === "text") {
                now.querySelector(".now").textContent = ""
                delete trobj[next]
              }
            } catch { }
            try {
              let after = timelinetbody.querySelector('tr[data-id="' + array[next + 1]["index"] + '"]')
              if (after) { after.dataset[cate + "id"] = "after" }

              if (cate === "text") {
                trobj[next + 1] = after
                let test = after.querySelector(".now")
                test.textContent = (test.dataset.timeid - 経過秒)
              }
            } catch { }


            if (cate === "text") {
              // console.log(array[next]["text"])//テキストを…どうしよう
            }
            if (cate === "voice") {
              // console.log(array[next]["text"])//音声を…どうしよう
              next_voice = array[next]["text"]//音声はストック
            }

            next++
            if (array.length <= next) {
              break;
            }
          }
          if (cate === "voice") {
            if (next_voice !== undefined) {
              テキスト読み上げ(next_voice, true)//実際に喋る
            }
          }
        }
        return next
      }
    }
  }
  function 再生停止処理(bool) {//trueで強制停止、falseで強制再生
    if (bool) {
      データロック(loadcheck)
      const trlist = timelinetbody.querySelectorAll("tr")
      trlist.forEach(tr => {
        tr.querySelector(".now").textContent = ""
        delete tr.dataset.textid
        delete tr.dataset.voiceid
      })

      main.dataset.start = "停止"
      timelinedetails.open = false

      try {
        // video.pause();
      } catch (error) {

      }
      実行関数追加("battlestart")

      button_start.textContent = "再生"
      button_start.classList.remove("end")
      loadcheck = false
    } else {
      データロック(loadcheck)
      main.dataset.start = "再生"
      timelinedetails.open = true


      try {
        // let videodelay = 9
        // video.currentTime = videodelay - input_count.value
        // video.play();
      } catch (error) {

      }

      テキストタイマー開始(load_voice_data, input_count.value)

      button_start.textContent = "停止"
      button_start.classList.add("end")
      loadcheck = true
    }
  }
  // #endregion
  function テキスト読み上げ(text, bool) {//新しい発声をキューへ、trueならキュー消去してから
    if (bool) { speechSynthesis.cancel() }//trueなら前回を止めて
    const uttr = new SpeechSynthesisUtterance(text)//音声を作って
    uttr.rate = 1.2//速度 0.1-10 > 10%-1000%
    uttr.pitch = 0.8//高さ 0-2   > 0%-200%
    if (voice.voice) { uttr.voice = voice.voice }
    if (voice.rate) { uttr.rate = voice.rate }
    if (voice.pitch) { uttr.pitch = voice.pitch }
    speechSynthesis.speak(uttr)//音声を再生

  }
  // #region 保存呼出関連
  let 汎用array = [
    ["input_text", input_text,],
    ["input_count", input_count,],
    ["input_mode", input_mode,],
    ["input_theme", input_theme,],
    ["input_rate", input_rate,],
    ["input_pitch", input_pitch,],
  ]
  function データ保存() {
    汎用array.forEach(ele => { localStorage.setItem("experttimer_" + ele[0], ele[1].value); })

    localStorage.setItem("experttimer_input_voice", input_voice.value);
  }
  function データ消去() {
    汎用array.forEach(ele => { localStorage.removeItem("experttimer_" + ele[0]); })
    localStorage.removeItem("experttimer_input_voice");
    // localStorage.clear()
  }

  function データロック(bool) {
    if (bool) {
      汎用array.forEach(ele => { ele[1].disabled = false })

      input_voice.disabled = false

      input_count_plus.disabled = false
      input_count_minus.disabled = false
    } else {
      汎用array.forEach(ele => { ele[1].disabled = true })

      input_voice.disabled = true

      input_count_plus.disabled = true
      input_count_minus.disabled = true
    }
  }
  function データ呼出() {
    汎用array.forEach(ele => {
      if (localStorage.getItem("experttimer_" + ele[0])) {
        ele[1].value = localStorage.getItem("experttimer_" + ele[0])
      }
    })
    speechSynthesis.onvoiceschanged = () => {
      voices = speechSynthesis.getVoices();
      voices.forEach((voice) => {
        if (!voice.lang.match('ja-JP')) { return }
        let option = element_create("option", voice.name, { "value": voice.name })
        input_voice.append(option)
      });
      input_voice.value = localStorage.getItem("experttimer_input_voice")
      ボイス調整()
    };

  }
  function ボイス調整() {
    try {
      voice.voice = voices.filter(voice => voice.name === input_voice.value)[0]
    } catch (error) { }

    try {
      input_pitch.value = Math.max(0, Math.min(200, Math.floor(Number(input_pitch.value))))
    } catch { input_pitch.value = 100 }
    voice.pitch = (input_pitch.value / 100)

    try {
      input_rate.value = Math.max(10, Math.min(1000, Math.floor(Number(input_rate.value))))
    } catch { input_rate.value = 100 }
    voice.rate = (input_rate.value / 100)
  }
  // #endregion
  // #region 実行系
  実行()
  function 実行() {
    データ呼出()
    function デバッグ() { テーマ切替(); テキスト再読込() }; デバッグ()
    function 単純リロード() { データ保存(); テキスト再読込(); }
    function 単純ボイス() { ボイス調整(); データ保存(); }
    function 単純テーマ() { データ保存(); テーマ切替(); }
    input_text.addEventListener('change', function () { 単純リロード() })
    input_count.addEventListener('change', function () { 単純リロード() })
    input_count_plus.addEventListener('click', function () { input_count.value++; 単純リロード() })
    input_count_minus.addEventListener('click', function () { input_count.value--; 単純リロード() })
    input_mode.addEventListener('change', function () { 単純リロード() })
    input_theme.addEventListener("change", function () { 単純テーマ() })
    input_voice.addEventListener("change", function () { 単純ボイス(); })
    input_rate.addEventListener("change", function () { 単純ボイス(); })
    input_pitch.addEventListener("change", function () { 単純ボイス(); })
    button_start.addEventListener('click', function () { 再生停止処理(loadcheck) })
  }
  // #endregion
});
