'use strict';
document.addEventListener('DOMContentLoaded', () => {
  let cell_input = document.querySelectorAll("#base>input")
  cell_input.forEach(cell => {
    cell.addEventListener('click', () => { kuro_main() })
  })
  let button = document.getElementById("reset_button")
  button.addEventListener('click', () => { cell_input.forEach(cell => { cell.checked = false }); kuro_main(); })

  //初期実行
  kuro_main()
  function kuro_main() {
    let [now_check, cell_text] = input_load()//入力データ取得
    let cell_loop_9 = fill_9(now_check, cell_text)//9埋まるパターン全探索
    let bingo_count = bingo_load(cell_loop_9)//bingo_load
    data_export(bingo_count, now_check)
  }
  function input_load() {//チェック数とチェックを取得0101011101
    let now_check = 0
    let cell_text = ""
    cell_input.forEach(cell => {
      if (cell.checked) {
        cell_text = cell_text + "1"
        now_check++
      } else {
        cell_text = cell_text + "0"
      }
    })
    return [now_check, cell_text]
  }
  function fill_9(now_check, cell_text) {
    if (now_check > 9) {
      return {}
    }
    let cell_loops = {
      0: {},
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
      6: {},
      7: {},
      8: {},
      9: {},
    }
    cell_loops[now_check][cell_text] = true//初期設定
    while (now_check < 9) {
      let keys = Object.keys(cell_loops[now_check])
      keys.forEach(key => {
        for (let index = 0; index < 16; index++) {
          if (key.substring(index + 0, index + 1) === "1") {//n番目の文字が
            // trueならスルー
          } else {
            // falseなら1に変更して追記
            let new_id = key.substring(0, index + 0) + "1" + key.substring(index + 1)
            cell_loops[now_check + 1][new_id] = true
          }
        }
      })
      now_check++
    }
    return cell_loops[9]
  }
  function bingo_load(cell_loop_9) {
    let bingo_count = {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
    }
    Object.keys(cell_loop_9).forEach(cell_text => {
      bingo_count[bingo_data[cell_text]]++
    });
    //ここまででビンゴ数数える
    bingo_count["0_3"] = bingo_count[0] + bingo_count[1] + bingo_count[2] + bingo_count[3]
    bingo_count["1_3"] = bingo_count[1] + bingo_count[2] + bingo_count[3]
    bingo_count["2_3"] = bingo_count[2] + bingo_count[3]
    bingo_count["3_3"] = bingo_count[3]
    return bingo_count
  }
  function data_export(bingo_count, now_check) {
    const 通り数 = document.querySelector("#pattern")
    const 確率 = document.querySelector("#percent")
    const 以上確率 = document.querySelector("#BINGOpercent")
    if (now_check <= 9) {
      通り数.querySelector('.tableA').textContent = bingo_count["0_3"];

      for (let index = 0; index < 4; index++) {
        通り数.querySelector('.table' + index).textContent = bingo_count[index];
        確率.querySelector('.table' + index).textContent = (bingo_count[index] / bingo_count["0_3"] * 100).toFixed(2) + "％";
        以上確率.querySelector('.table' + index).textContent = (bingo_count[index + "_3"] / bingo_count["0_3"] * 100).toFixed(2) + "％";
      }
    } else {
      通り数.querySelector('.tableA').textContent = "不可";

      for (let index = 0; index < 4; index++) {
        通り数.querySelector('.table' + index).textContent = "不可"
        確率.querySelector('.table' + index).textContent = "不可"
        以上確率.querySelector('.table' + index).textContent = "不可"
      }
    }
    if (now_check <= 7) {
      let nowdata;//現時点の確率
      let updata;//リセットしてよくなる確率
      const lastresult = Math.floor(
        bingo_mgp[1] * bingo_count[1] / bingo_count["0_3"] +
        bingo_mgp[2] * bingo_count[2] / bingo_count["0_3"] +
        bingo_mgp[3] * bingo_count[3] / bingo_count["0_3"]
      )//今のスコア
      for (let index = 0; index < AllData.length; index++) {//呼び出し
        if (AllData[index][0] > lastresult) {
          // console.log("参照");
          nowdata = AllData[index - 1];
          updata = AllData[index];
          break
        }
      }

      document.getElementById('finalresult0').textContent = (nowdata[1] * 100).toFixed(2) + "％" + "=現時点の確率";
      document.getElementById('finalresult1').textContent = (updata[1] * 100).toFixed(2) + "％" + "=リセットして良くなる確率";
    } else {
      document.getElementById('finalresult0').textContent = "不可" + "％" + "=現時点の確率";
      document.getElementById('finalresult1').textContent = "不可" + "％" + "=リセットして良くなる確率";
    }
  }
});