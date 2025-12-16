'use strict';
document.addEventListener('DOMContentLoaded', () => {
  let lang = document.querySelector("html").lang
  let mapdata = {
    "The Occult Crescent: South Horn": {
      name_ja: "クレセントアイル：南征編",
      name_en: "The Occult Crescent: South Horn",
      mapurl: "img/クレセントアイル：南征編_マップ.png",
      bronzebox: "img/銅箱.png",
      silverbox: "img/銀箱.png",
      otherbox: "img/銅箱_不明.png",
      aetheryte: [
        { name_ja: "デジョン先", name_en: "Return point", pos: { x: 38.4, y: 7.3 } },
        { name_ja: "放浪神聖域跡前", name_en: "The Wanderer's Haven", pos: { x: 18.0, y: 9.2 } },
        { name_ja: "水晶洞窟前", name_en: "Crystallized Caverns", pos: { x: 14.3, y: 19.0 } },
        { name_ja: "古樹の湿原前", name_en: "Eldergrowth", pos: { x: 27.5, y: 27.5 } },
        { name_ja: "石塔水沼前", name_en: "Stonemarsh", pos: { x: 13.7, y: 27.0 } },
        { name_ja: "北ポット", name_en: "North magic pots", pos: { x: 25.5, y: 17.1 } },
        { name_ja: "南ポット", name_en: "South magic pots", pos: { x: 11.8, y: 31.8 } },
      ],
      offset_0: { x: 1, y: 1 },
      offset_1: { x: 41.9, y: 41.9 },
      pottreasure: [
        { x: 14.7, y: 4.2, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 32.8, y: 5.3, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 32.8, y: 5.3, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 5.8, y: 5.8, tag: "pot", object: { color: "#808080", degree: [270, 360], } },
        { x: 7.9, y: 6.2, tag: "pot", object: { color: "#808080", degree: [180, 270], } },
        { x: 17.6, y: 7.1, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 5.2, y: 8.2, tag: "pot", object: { color: "#808080", degree: [180, 270], } },
        { x: 28, y: 8.3, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 10.7, y: 8.4, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 7, y: 8.7, tag: "pot", object: { color: "#ffff00", degree: [180, 360], } },
        { x: 5.4, y: 9.4, tag: "pot", object: { color: "#ffff00", degree: [180, 360], } },
        { x: 33.2, y: 10.5, tag: "pot", object: { color: "#ffff00", degree: [180, 360], } },
        { x: 33.2, y: 10.5, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 17.1, y: 11.3, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 5.8, y: 11.6, tag: "pot", object: { color: "#808080", degree: [270, 360], } },
        { x: 11, y: 12.2, tag: "pot", object: { color: "#808080", degree: [270, 360], } },
        { x: 13.7, y: 12.2, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 13.7, y: 12.2, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 21.7, y: 12.9, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 22.9, y: 13.5, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 13.8, y: 13.8, tag: "pot", object: { color: "#808080", degree: [270, 360], } },
        { x: 20.2, y: 14, tag: "pot", object: { color: "#808080", degree: [180, 270], } },
        { x: 6.9, y: 14, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 37.5, y: 14.4, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 10.4, y: 15.3, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 17.5, y: 15.7, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 22.6, y: 16.7, tag: "pot", object: { color: "#808080", degree: [270, 360], } },
        { x: 5.2, y: 16.9, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 5.2, y: 16.9, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 13.7, y: 17, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 13.7, y: 17, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 8.2, y: 17, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 8.2, y: 17, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 8.2, y: 17, tag: "pot", object: { color: "#ffff00", degree: [180, 360], } },
        { x: 6.4, y: 17.6, tag: "pot", object: { color: "#808080", degree: [180, 270], } },
        { x: 20.7, y: 17.9, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 35.1, y: 18.2, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 29.4, y: 18.8, tag: "pot", object: { color: "#808080", degree: [270, 360], } },
        { x: 9.2, y: 18.8, tag: "pot", object: { color: "#808080", degree: [180, 270], } },
        { x: 4.6, y: 19, tag: "pot", object: { color: "#ffff00", degree: [180, 360], } },
        { x: 12.1, y: 19.6, tag: "pot", object: { color: "#808080", degree: [270, 360], } },
        { x: 38.9, y: 19.7, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 8.5, y: 20, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 8.5, y: 20, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 15.2, y: 20.7, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 15.2, y: 20.7, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 39.2, y: 21.1, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 7.9, y: 21.3, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 5.3, y: 21.4, tag: "pot", object: { color: "#808080", degree: [180, 270], } },
        { x: 12.3, y: 21.6, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 12.3, y: 21.6, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 12.3, y: 21.6, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 12.3, y: 21.6, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 15.2, y: 22.8, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 27.7, y: 23, tag: "pot", object: { color: "#808080", degree: [270, 360], } },
        { x: 23.6, y: 24.4, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 23.6, y: 24.4, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 34.7, y: 24.7, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 34.7, y: 24.7, tag: "pot", object: { color: "#ffff00", degree: [180, 360], } },
        { x: 33.3, y: 24.9, tag: "pot", object: { color: "#808080", degree: [180, 270], } },
        { x: 28.2, y: 25.2, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 15.1, y: 25.7, tag: "pot", object: { color: "#808080", degree: [180, 270], } },
        { x: 32.9, y: 26.9, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 32.9, y: 26.9, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 26.7, y: 28.1, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 26.7, y: 28.1, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 35.6, y: 28.6, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 23.2, y: 29.4, tag: "pot", object: { color: "#808080", degree: [270, 360], } },
        { x: 20.6, y: 29.5, tag: "pot", object: { color: "#808080", degree: [270, 360], } },
        { x: 18.1, y: 30.2, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 18.1, y: 30.2, tag: "pot", object: { color: "#ffff00", degree: [180, 360], } },
        { x: 26, y: 31.7, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 29.8, y: 33.3, tag: "pot", object: { color: "#808080", degree: [270, 360], } },
        { x: 37.1, y: 33.4, tag: "pot", object: { color: "#808080", degree: [180, 270], } },
        { x: 4.8, y: 33.6, tag: "pot", object: { color: "#808080", degree: [270, 360], } },
        { x: 25.4, y: 34, tag: "pot", object: { color: "#808080", degree: [270, 360], } },
        { x: 22.1, y: 34.9, tag: "pot", object: { color: "#808080", degree: [270, 360], } },
        { x: 7.5, y: 34.9, tag: "pot", object: { color: "#808080", degree: [270, 360], } },
        { x: 6.8, y: 35.1, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 3.7, y: 35.8, tag: "pot", object: { color: "#ffff00", degree: [180, 360], } },
        { x: 22.8, y: 36.3, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 7.9, y: 36.7, tag: "pot", object: { color: "#808080", degree: [270, 360], } },
        { x: 4.8, y: 36.8, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 4.8, y: 36.8, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 37.9, y: 36.9, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 5.9, y: 37.7, tag: "pot", object: { color: "#808080", degree: [270, 360], } },
        { x: 20.2, y: 38, tag: "pot", object: { color: "#ffff00", degree: [180, 360], } },
        { x: 20.2, y: 38, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 6.6, y: 38, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 6.6, y: 38, tag: "pot", object: { color: "#ffff00", degree: [180, 360], } },
        { x: 29.3, y: 38.2, tag: "pot", object: { color: "#00ff00", degree: [0, 90], } },
        { x: 9.4, y: 38.5, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 30.1, y: 38.8, tag: "pot", object: { color: "#00ffff", degree: [90, 180], } },
        { x: 11.6, y: 10.9, tag: "treasure", color: "bronze" },
        { x: 34.7, y: 11.8, tag: "treasure", color: "bronze" },
        { x: 29.2, y: 12.4, tag: "treasure", color: "bronze" },
        { x: 18.7, y: 13.1, tag: "treasure", color: "bronze" },
        { x: 38.8, y: 13.7, tag: "treasure", color: "bronze" },
        { x: 14.5, y: 13.8, tag: "treasure", color: "bronze" },
        { x: 7.8, y: 14.4, tag: "treasure", color: "bronze" },
        { x: 5.4, y: 15.2, tag: "treasure", color: "silver" },
        { x: 28.5, y: 15.6, tag: "treasure", color: "bronze" },
        { x: 22.5, y: 15.7, tag: "treasure", color: "bronze" },
        { x: 37.0, y: 16.3, tag: "treasure", color: "bronze" },
        { x: 6.1, y: 16.7, tag: "treasure", color: "bronze" },
        { x: 11.7, y: 17.3, tag: "treasure", color: "bronze" },
        { x: 7.8, y: 17.5, tag: "treasure", color: "silver" },
        { x: 36.8, y: 18.6, tag: "treasure", color: "silver" },
        { x: 18.3, y: 18.8, tag: "treasure", color: "bronze" },
        { x: 4.3, y: 19.5, tag: "treasure", color: "bronze" },
        { x: 30.9, y: 19.7, tag: "treasure", color: "bronze" },
        { x: 6.8, y: 19.8, tag: "treasure", color: "bronze" },
        { x: 35.9, y: 20.1, tag: "treasure", color: "bronze" },
        { x: 26.3, y: 21.1, tag: "treasure", color: "bronze" },
        { x: 12.5, y: 22.0, tag: "treasure", color: "bronze" },
        { x: 6.3, y: 23.4, tag: "treasure", color: "bronze" },
        { x: 37.2, y: 23.6, tag: "treasure", color: "bronze" },
        { x: 33.6, y: 23.8, tag: "treasure", color: "bronze" },
        { x: 16.3, y: 23.9, tag: "treasure", color: "bronze" },
        { x: 20.9, y: 24.4, tag: "treasure", color: "bronze" },
        { x: 13.5, y: 24.9, tag: "treasure", color: "bronze" },
        { x: 7.2, y: 25.3, tag: "treasure", color: "bronze" },
        { x: 31.8, y: 26.2, tag: "treasure", color: "silver" },
        { x: 27.0, y: 26.3, tag: "treasure", color: "bronze" },
        { x: 13.4, y: 28.1, tag: "treasure", color: "bronze" },
        { x: 15.7, y: 29.0, tag: "treasure", color: "silver" },
        { x: 8.5, y: 29.5, tag: "treasure", color: "bronze" },
        { x: 34.3, y: 29.6, tag: "treasure", color: "bronze" },
        { x: 21.6, y: 30.0, tag: "treasure", color: "bronze" },
        { x: 38.0, y: 30.1, tag: "treasure", color: "bronze" },
        { x: 26.5, y: 31.3, tag: "treasure", color: "bronze" },
        { x: 13.9, y: 31.9, tag: "treasure", color: "bronze" },
        { x: 30.9, y: 32.0, tag: "treasure", color: "bronze" },
        { x: 6.8, y: 32.7, tag: "treasure", color: "bronze" },
        { x: 38.8, y: 33.0, tag: "treasure", color: "bronze" },
        { x: 35.4, y: 33.4, tag: "treasure", color: "silver" },
        { x: 17.5, y: 33.8, tag: "treasure", color: "bronze" },
        { x: 33.4, y: 33.9, tag: "treasure", color: "bronze" },
        { x: 10.4, y: 34.0, tag: "treasure", color: "bronze" },
        { x: 27.3, y: 34.2, tag: "treasure", color: "bronze" },
        { x: 7.9, y: 34.2, tag: "treasure", color: "bronze" },
        { x: 22.2, y: 34.4, tag: "treasure", color: "bronze" },
        { x: 30.1, y: 35.1, tag: "treasure", color: "bronze" },
        { x: 38.1, y: 35.4, tag: "treasure", color: "bronze" },
        { x: 5.8, y: 35.4, tag: "treasure", color: "bronze" },
        { x: 8.5, y: 35.6, tag: "treasure", color: "silver" },
        { x: 24.1, y: 36.9, tag: "treasure", color: "bronze" },
        { x: 24.2, y: 36.9, tag: "treasure", color: "bronze" },
        { x: 24.3, y: 36.9, tag: "treasure", color: "bronze" },
        { x: 7.1, y: 37.3, tag: "treasure", color: "bronze" },
        { x: 16.9, y: 37.5, tag: "treasure", color: "bronze" },
        { x: 9.4, y: 37.5, tag: "treasure", color: "bronze" },
        { x: 9.7, y: 4.1, tag: "treasure", color: "bronze" },
        { x: 5.0, y: 4.8, tag: "treasure", color: "silver" },
        { x: 12.4, y: 5.9, tag: "treasure", color: "bronze" },
        { x: 29.1, y: 6.6, tag: "treasure", color: "bronze" },
        { x: 6.8, y: 6.9, tag: "treasure", color: "bronze" },
        { x: 19.1, y: 7.3, tag: "treasure", color: "bronze" },
        { x: 33.8, y: 7.4, tag: "treasure", color: "bronze" },
        { x: 3.8, y: 7.8, tag: "treasure", color: "bronze" },
        { x: 31.2, y: 9.6, tag: "treasure", color: "bronze" },
        { x: 8.2, y: 9.8, tag: "treasure", color: "bronze" },
        { x: 24.3, y: 9.9, tag: "treasure", color: "bronze" },
      ]
    },
  }
  let nowmap
  const silverimage = new Image();
  const bronzeimage = new Image();
  const otherimage = new Image();
  const campus_x = 1000
  const campus_y = 1000
  function degree_split(firstdegree, num) {
    let array = []
    for (let index = 0; index < num; index++) {
      array.push(firstdegree + 360 / num * index)
    }
    return array
  }
  lang_push()
  function lang_push() {//言語設定
    switch (lang) {
      case "en":
        document.querySelector("label[for='id_change_treasure']").textContent = "box switch"
        document.querySelector("label[for='id_change_pot']").textContent = "pot switch"
        document.querySelector("label[for='id_change_border']").textContent = "border switch"
        document.querySelector("label[for='id_map_select']").textContent = "map select"
        document.querySelector("button#id_reset").textContent = "reset & map reload"
        break;
      case "ja":
        document.querySelector("label[for='id_change_treasure']").textContent = "宝箱表示切替"
        document.querySelector("label[for='id_change_pot']").textContent = "マジポ表示切替"
        document.querySelector("label[for='id_change_border']").textContent = "格子表示切替"
        document.querySelector("label[for='id_map_select']").textContent = "マップ選択"
        document.querySelector("button#id_reset").textContent = "リセット&マップ読み込み"
        break;
    }
  }
  const id_change_pot = document.querySelector("#id_change_pot")
  const id_canvas_list_pot = document.getElementById("id_canvas_list_pot")
  const id_change_treasure = document.querySelector("#id_change_treasure")
  const id_canvas_list_treasure = document.getElementById("id_canvas_list_treasure")
  const id_change_border = document.querySelector("#id_change_border")
  const id_canvas_list_border = document.getElementById("id_canvas_list_border")
  const id_canvas_list_fill = document.getElementById("id_canvas_list_fill")
  const id_canvas_list_circle = document.getElementById("id_canvas_list_circle")
  const id_select_list_aetheryte = document.getElementById("id_select_list_aetheryte")
  const id_map_none = document.getElementById("id_map_none")
  // 各種チェックボックス
  id_change_treasure.addEventListener('click', () => {
    checkbox_change()
  })
  id_change_pot.addEventListener('click', () => {
    checkbox_change()
  })
  id_change_border.addEventListener('click', () => {
    checkbox_change()
  })
  function checkbox_change() {
    if (id_change_pot.checked) {
      id_canvas_list_pot.classList.remove("break")
    } else {
      id_canvas_list_pot.classList.add("break")
    }
    if (id_change_treasure.checked) {
      id_canvas_list_treasure.classList.remove("break")
    } else {
      id_canvas_list_treasure.classList.add("break")
    }
    if (id_change_border.checked) {
      id_canvas_list_border.classList.remove("break")
    } else {
      id_canvas_list_border.classList.add("break")
    }
  }
  // 各種チェックボックス
  function tan_load(degree) {//三角関数を角度から呼ぶだけ
    let rad = Math.PI / 180 * degree
    let tan = Math.tan(rad)
    // console.log(tan)
    return tan
    // 対辺=隣辺*tanΘ
    // 隣辺=対辺/tanΘ
  }
  function border_tan(pos_x, pos_y, max_x, max_y, degree) {//始点サイズと最大キャンパスサイズと角度が指定されたら端を返す
    degree = degree % 360
    let next_x
    let next_y
    switch (true) {
      case degree === 0:
        next_x = pos_x
        next_y = 0
        break;
      case degree < 180:
        next_x = max_x
        next_y = tan_load(degree - 90) * (next_x - pos_x) + pos_y
        break;
      case degree === 180:
        next_x = pos_x
        next_y = max_y
        break;
      case degree < 360:
        next_x = 0
        next_y = tan_load(degree - 90) * (next_x - pos_x) + pos_y
        break;
      default:
        alert("エラー(角度指定無し、製作者に連絡してください)")
        throw "エラー(角度指定無し、製作者に連絡してください)"
    }
    return { x: next_x, y: next_y }
  }
  function mapload(map) {
    // 各種初期化
    fia_element_clear(id_canvas_list_pot)
    fia_element_clear(id_canvas_list_treasure)
    fia_element_clear(id_canvas_list_border)
    fia_element_clear(id_canvas_list_fill)
    fia_element_clear(id_canvas_list_circle)
    fia_element_clear(id_select_list_aetheryte)

    // 読み直し
    checkbox_change()
    nowmap = mapdata[map]

    // 各種実行
    id_map_none.src = nowmap["mapurl"]
    silverimage.src = nowmap['silverbox'];
    bronzeimage.src = nowmap['bronzebox'];
    otherimage.src = nowmap['otherbox'];
    let zero_xy = {
      x: nowmap["offset_0"].x,
      y: nowmap["offset_0"].y
    }
    let map_xy = {
      x: nowmap["offset_1"].x - zero_xy.x,
      y: nowmap["offset_1"].y - zero_xy.y
    }
    pottreasure()
    function pottreasure() {
      const canvas_pot = fia_canvas_create(campus_x, campus_y)
      id_canvas_list_pot.append(canvas_pot)
      let ctx_pot = fia_canvas_reset(canvas_pot)

      const canvas_treasure = fia_canvas_create(campus_x, campus_y)
      id_canvas_list_treasure.append(canvas_treasure)
      let ctx_treasure = fia_canvas_reset(canvas_treasure)

      nowmap["pottreasure"].forEach(element => {
        let pixel_xy = {
          x: (element.x - zero_xy.x) / map_xy.x * campus_x,
          y: (element.y - zero_xy.y) / map_xy.y * campus_y
        }
        switch (element["tag"]) {
          case "pot":
            // console.log("pot")
            // console.log(element)
            let size = 0.5 / map_xy.x * campus_x
            let deg = element["object"]["degree"]
            let color = element["object"]["color"]
            fia_draw_circle(ctx_pot, [{ x: pixel_xy.x, y: pixel_xy.y }], "fill", size, deg, color)
            deg = [0, 360]
            color = "black"
            fia_draw_circle(ctx_pot, [{ x: pixel_xy.x, y: pixel_xy.y }], "stroke", size, deg, color, 2)
            break;
          case "treasure":
            // console.log("treasure")
            // console.log(element)
            let image
            switch (element["color"]) {
              case "bronze": image = bronzeimage; break;
              case "silver": image = silverimage; break;
              case "other": image = otherimage; break;
              default:
                alert("エラー(銀箱銅箱指定無し、製作者に連絡してください)")
                throw "エラー(銀箱銅箱指定無し、製作者に連絡してください)"
            }
            image.addEventListener("load", () => {
              ctx_treasure.drawImage(image, pixel_xy.x - 12, pixel_xy.y - 12, 24, 24);
            });
            break;
          default:
            alert("エラー(内容指定無し、製作者に連絡してください)")
            throw "エラー(内容指定無し、製作者に連絡してください)";
        }
      })
    }
    clickload()
    function clickload() {
      let canvas_circle = fia_canvas_create(campus_x, campus_y)
      id_canvas_list_circle.append(canvas_circle)
      canvas_circle.addEventListener('click', e => {
        // console.log(e)
        let mapsize_xy = {
          x: canvas_circle.clientWidth,
          y: canvas_circle.clientHeight,
        }
        let pixel_xy = {
          x: e.offsetX / mapsize_xy.x * campus_x,
          y: e.offsetY / mapsize_xy.y * campus_y,
        }
        let ctx_circle = fia_canvas_reset(canvas_circle)
        let degree_list = degree_split(360 / 8 / 2, 8)
        degree_list.forEach(degree => {
          fia_draw_circle(ctx_circle, [{ x: pixel_xy.x, y: pixel_xy.y }], "stroke", 4 / map_xy.x * campus_x, [0, 360], "white", 1)
          fia_draw_circle(ctx_circle, [{ x: pixel_xy.x, y: pixel_xy.y }], "stroke", 2 / map_xy.x * campus_x, [0, 360], "white", 1)
          fia_draw_circle(ctx_circle, [{ x: pixel_xy.x, y: pixel_xy.y }], "stroke", 0.5 / map_xy.x * campus_x, [0, 360], "white", 1)
        })
      })
    }
    aetheryte()
    function aetheryte() {
      nowmap["aetheryte"].forEach(element => {
        // console.log(element)
        let pixel_xy = {
          x: (element["pos"].x - zero_xy.x) / map_xy.x * campus_x,
          y: (element["pos"].y - zero_xy.y) / map_xy.y * campus_y
        }
        // console.log(pixel_xy)
        let canvas_fill = fia_canvas_create(campus_x, campus_y)
        id_canvas_list_fill.append(canvas_fill)
        canvas_fill.dataset.id = element["name_en"]

        let canvas_border = fia_canvas_create(campus_x, campus_y)
        id_canvas_list_border.append(canvas_border)
        canvas_border.dataset.border = element["name_en"]
        let ctx_border = fia_canvas_reset(canvas_border)

        let degree_list = degree_split(360 / 8 / 2, 8)
        degree_list.forEach(degree => {
          // console.log(pixel_xy.x)
          let next = border_tan(pixel_xy.x, pixel_xy.y, campus_x, campus_y, degree) //始点サイズと最大キャンパスサイズと角度が指定されたら塗れる
          fia_draw_line(ctx_border, [{ x: pixel_xy.x, y: pixel_xy.y }, next,], "stroke", "#ff00ff", 2)
        })


        let direction_call_fill = {
          "・not": { name_en: "・not", name_ja: "・無　", path: [], ja: [], },
          "↑N  ": { name_en: "↑N  ", name_ja: "↑北　", path: ["↖NNW", "↖NW ", "↙SW ", "↘SE ", "↗NE ", "↗NNE",], },
          "↗NE ": { name_en: "↗NE ", name_ja: "↗北東", path: ["↗NNE", "↖NW ", "↙SW ", "↘SE ", "↗NE ", "↗ENE",], },
          "→E  ": { name_en: "→E  ", name_ja: "→東　", path: ["↗ENE", "↗NE ", "↖NW ", "↙SW ", "↘SE ", "↘ESE",], },
          "↘SE ": { name_en: "↘SE ", name_ja: "↘南東", path: ["↘ESE", "↗NE ", "↖NW ", "↙SW ", "↘SE ", "↘SSE",], },
          "↓S  ": { name_en: "↓S  ", name_ja: "↓南　", path: ["↘SSE", "↘SE ", "↗NE ", "↖NW ", "↙SW ", "↙SSW",], },
          "↙SW ": { name_en: "↙SW ", name_ja: "↙南西", path: ["↙SSW", "↘SE ", "↗NE ", "↖NW ", "↙SW ", "↙WSW",], },
          "←W  ": { name_en: "←W  ", name_ja: "←西　", path: ["↙WSW", "↙SW ", "↘SE ", "↗NE ", "↖NW ", "↖WNW",], },
          "↖NW ": { name_en: "↖NW ", name_ja: "↖北西", path: ["↖WNW", "↙SW ", "↘SE ", "↗NE ", "↖NW ", "↖NNW",], },
        }
        let directiondata = {//16方位は東西南北〆、4方位は四隅
          "↗NNE": border_tan(pixel_xy.x, pixel_xy.y, campus_x, campus_y, 360 / 8 / 2 + 360 / 8 * 0),
          "↗NE ": { x: campus_x, y: 0 },
          "↗ENE": border_tan(pixel_xy.x, pixel_xy.y, campus_x, campus_y, 360 / 8 / 2 + 360 / 8 * 1),
          "↘ESE": border_tan(pixel_xy.x, pixel_xy.y, campus_x, campus_y, 360 / 8 / 2 + 360 / 8 * 2),
          "↘SE ": { x: campus_x, y: campus_y },
          "↘SSE": border_tan(pixel_xy.x, pixel_xy.y, campus_x, campus_y, 360 / 8 / 2 + 360 / 8 * 3),
          "↙SSW": border_tan(pixel_xy.x, pixel_xy.y, campus_x, campus_y, 360 / 8 / 2 + 360 / 8 * 4),
          "↙SW ": { x: 0, y: campus_y },
          "↙WSW": border_tan(pixel_xy.x, pixel_xy.y, campus_x, campus_y, 360 / 8 / 2 + 360 / 8 * 5),
          "↖WNW": border_tan(pixel_xy.x, pixel_xy.y, campus_x, campus_y, 360 / 8 / 2 + 360 / 8 * 6),
          "↖NW ": { x: 0, y: 0 },
          "↖NNW": border_tan(pixel_xy.x, pixel_xy.y, campus_x, campus_y, 360 / 8 / 2 + 360 / 8 * 7),
        }
        select_edit()
        function select_edit() {
          //select作成
          let div = fia_element_create("div")
          id_select_list_aetheryte.append(div)

          let label = fia_element_create("label")
          div.append(label)
          label.textContent = element["name_" + lang]
          
          let select = fia_element_create("select")
          label.append(select)

          // 一覧オプション作成
          Object.keys(direction_call_fill).forEach(element => {
            let option = fia_element_create("option")
            select.append(option)
            option.value = direction_call_fill[element]["name_en"]
            option.textContent = direction_call_fill[element]["name_" + lang]
          })


          // チェンジしたら一括変更
          select.addEventListener('change', () => {
            let canvas_fill = document.querySelector(`canvas[data-id="${element["name_en"]}"]`)
            let ctx_fill = fia_canvas_reset(canvas_fill)

            // console.log(direction_call_fill[select.value]["path"])
            let array = [{ x: pixel_xy.x, y: pixel_xy.y }]
            direction_call_fill[select.value]["path"].forEach(path => {
              array.push(directiondata[path])
            })
            fia_draw_line(ctx_fill, array, "fill", "#black")
          })

        }
      })
    }
  }
  function map_select_load() {
    fia_element_clear(id_map_select)
    Object.keys(mapdata).forEach(element => {
      let option = fia_element_create("option")
      id_map_select.append(option)
      option.value = element
      option.textContent = mapdata[element]["name_" + lang]
    })
    id_map_select.addEventListener("change", () => {
      mapload(id_map_select.value)
    })
  }
  map_select_load()


  mapload(id_map_select.value)//初回実行
  document.getElementById("id_reset").addEventListener('click', () => {
    mapload(id_map_select.value)
  })
});

