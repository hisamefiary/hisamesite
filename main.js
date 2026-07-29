'use strict';
let leaflet_map
document.addEventListener('DOMContentLoaded', () => {


  let lang = document.querySelector("html").lang
  let mapdata = {
    "The Occult Crescent: South Horn": {
      name_ja: "クレセントアイル：南征編",
      name_en: "The Occult Crescent: South Horn",
      aetheryte: [
        { name_ja: "デジョン先", name_en: "Return point", pos: { x: 38.4, y: 7.3 } },
        { name_ja: "放浪神聖域跡前", name_en: "The Wanderer's Haven", pos: { x: 18.0, y: 9.2 } },
        { name_ja: "水晶洞窟前", name_en: "Crystallized Caverns", pos: { x: 14.3, y: 19.0 } },
        { name_ja: "古樹の湿原前", name_en: "Eldergrowth", pos: { x: 27.5, y: 27.5 } },
        { name_ja: "石塔水沼前", name_en: "Stonemarsh", pos: { x: 13.7, y: 27.0 } },
        { name_ja: "北ポット", name_en: "North magic pots", pos: { x: 25.5, y: 17.1 } },
        { name_ja: "南ポット", name_en: "South magic pots", pos: { x: 11.8, y: 31.8 } },
      ],
      mapimg: {
        x: 4096,
        y: 4096,
        src: './img/クレセントアイル：南征編_マップ.png',
      },
      mappos: {
        x_min: 1.0,
        y_min: 1.0,
        x_max: 41.9,
        y_max: 41.9,
        x_size: 40.9,
        y_size: 40.9,
      },
      potdata: [
        { x: 3.7, y: 35.8, tag: "pot_gold", name_ja: "フレンド", name_en: "friend", },
        { x: 4.6, y: 19, tag: "pot_gold", name_ja: "不明", name_en: "unknown ", },
        { x: 4.7, y: 36.9, tag: "pot_silverbronze", name_ja: "フレンド", name_en: "friend", },
        { x: 4.8, y: 22.7, tag: "pot_silver", name_ja: "フレンド", name_en: "friend", },
        { x: 4.8, y: 33.6, tag: "pot_othertop", name_ja: "Blossom様", name_en: "Dear Blossom", },
        { x: 5.2, y: 8.2, tag: "pot_otherbottom", name_ja: "Ran様", name_en: "Dear Ran Yumesaki", },
        { x: 5.2, y: 16.9, tag: "pot_goldsilverbronze", name_ja: "フレンド", name_en: "friend", },
        { x: 5.3, y: 21.4, tag: "pot_otherbottom", name_ja: "Ran様", name_en: "Dear Ran Yumesaki", },
        { x: 5.4, y: 9.4, tag: "pot_gold", name_ja: "フレンド", name_en: "friend", },
        { x: 5.8, y: 5.8, tag: "pot_othertop", name_ja: "Blossom様", name_en: "Dear Blossom", },
        { x: 5.8, y: 11.6, tag: "pot_othertop", name_ja: "Blossom様", name_en: "Dear Blossom", },
        { x: 5.9, y: 37.7, tag: "pot_othertop", name_ja: "Blossom様", name_en: "Dear Blossom", },
        { x: 6.4, y: 17.6, tag: "pot_otherbottom", name_ja: "Ran様", name_en: "Dear Ran Yumesaki", },
        { x: 6.5, y: 38, tag: "pot_goldsilverbronze", name_ja: "フレンド", name_en: "friend", },
        { x: 6.8, y: 35.1, tag: "pot_silver", name_ja: "フレンド", name_en: "friend", },
        { x: 6.9, y: 14, tag: "pot_bronze", name_ja: "フレンド", name_en: "friend", },
        { x: 7, y: 8.7, tag: "pot_gold", name_ja: "フレンド", name_en: "friend", },
        { x: 7.2, y: 35.6, tag: "pot_bronze", name_ja: "フレンド", name_en: "friend", },
        { x: 7.3, y: 34.8, tag: "pot_goldsilver", name_ja: "フレンド", name_en: "friend", },
        { x: 7.9, y: 6.2, tag: "pot_otherbottom", name_ja: "Ran様", name_en: "Dear Ran Yumesaki", },
        { x: 7.9, y: 21.3, tag: "pot_bronze", name_ja: "フレンド", name_en: "friend", },
        { x: 7.9, y: 36.7, tag: "pot_othertop", name_ja: "Blossom様", name_en: "Dear Blossom", },
        { x: 8.2, y: 17.1, tag: "pot_goldbronze", name_ja: "フレンド", name_en: "friend", },
        { x: 8.5, y: 20, tag: "pot_silverbronze", name_ja: "フレンド", name_en: "friend", },
        { x: 9.2, y: 18.8, tag: "pot_otherbottom", name_ja: "Ran様", name_en: "Dear Ran Yumesaki", },
        { x: 9.4, y: 38.5, tag: "pot_silver", name_ja: "フレンド", name_en: "friend", },
        { x: 10.4, y: 15.3, tag: "pot_bronze", name_ja: "フレンド", name_en: "friend", },
        { x: 10.7, y: 8.4, tag: "pot_bronze", name_ja: "フレンド", name_en: "friend", },
        { x: 11, y: 12.2, tag: "pot_othertop", name_ja: "Blossom様", name_en: "Dear Blossom", },
        { x: 11.9, y: 19.7, tag: "pot_gold", name_ja: "フレンド", name_en: "friend", },
        { x: 12.3, y: 21.5, tag: "pot_silverbronze", name_ja: "フレンド", name_en: "friend", },
        { x: 13.7, y: 12.2, tag: "pot_silverbronze", name_ja: "フレンド", name_en: "friend", },
        { x: 13.7, y: 17, tag: "pot_silverbronze", name_ja: "フレンド", name_en: "friend", },
        { x: 13.8, y: 13.8, tag: "pot_othertop", name_ja: "Blossom様", name_en: "Dear Blossom", },
        { x: 14.7, y: 4.2, tag: "pot_silver", name_ja: "フレンド", name_en: "friend", },
        { x: 15, y: 25.5, tag: "pot_silver", name_ja: "フレンド", name_en: "friend", },
        { x: 15.1, y: 20.7, tag: "pot_silverbronze", name_ja: "フレンド", name_en: "friend", },
        { x: 15.2, y: 22.8, tag: "pot_silver", name_ja: "フレンド", name_en: "friend", },
        { x: 17.1, y: 11.3, tag: "pot_silver", name_ja: "フレンド", name_en: "friend", },
        { x: 17.5, y: 15.7, tag: "pot_silverbronze", name_ja: "フレンド", name_en: "friend", },
        { x: 17.6, y: 7.1, tag: "pot_bronze", name_ja: "フレンド", name_en: "friend", },
        { x: 18.1, y: 30.2, tag: "pot_goldbronze", name_ja: "フレンド", name_en: "friend", },
        { x: 20.2, y: 14, tag: "pot_otherbottom", name_ja: "Ran様", name_en: "Dear Ran Yumesaki", },
        { x: 20.3, y: 37.9, tag: "pot_goldsilver", name_ja: "フレンド", name_en: "friend", },
        { x: 20.6, y: 29.5, tag: "pot_othertop", name_ja: "Blossom様", name_en: "Dear Blossom", },
        { x: 20.7, y: 17.9, tag: "pot_bronze", name_ja: "フレンド", name_en: "friend", },
        { x: 21.7, y: 12.9, tag: "pot_silver", name_ja: "フレンド", name_en: "friend", },
        { x: 21.8, y: 34.9, tag: "pot_bronze", name_ja: "フレンド", name_en: "friend", },
        { x: 22.6, y: 16.7, tag: "pot_othertop", name_ja: "Blossom様", name_en: "Dear Blossom", },
        { x: 22.8, y: 36.3, tag: "pot_bronze", name_ja: "不明", name_en: "unknown ", },
        { x: 22.9, y: 13.5, tag: "pot_bronze", name_ja: "フレンド", name_en: "friend", },
        { x: 23, y: 29.2, tag: "pot_bronze", name_ja: "フレンド", name_en: "friend", },
        { x: 23.6, y: 24.4, tag: "pot_silverbronze", name_ja: "フレンド", name_en: "friend", },
        { x: 25.4, y: 33.9, tag: "pot_silver", name_ja: "フレンド", name_en: "friend", },
        { x: 26, y: 31.7, tag: "pot_bronze", name_ja: "フレンド", name_en: "friend", },
        { x: 26.7, y: 28, tag: "pot_silverbronze", name_ja: "フレンド", name_en: "friend", },
        { x: 27.7, y: 23, tag: "pot_othertop", name_ja: "Blossom様", name_en: "Dear Blossom", },
        { x: 28, y: 8.3, tag: "pot_silver", name_ja: "フレンド", name_en: "friend", },
        { x: 28.2, y: 25.2, tag: "pot_bronze", name_ja: "フレンド", name_en: "friend", },
        { x: 29.3, y: 38.2, tag: "pot_bronze", name_ja: "フレンド", name_en: "friend", },
        { x: 29.4, y: 18.8, tag: "pot_othertop", name_ja: "Blossom様", name_en: "Dear Blossom", },
        { x: 29.8, y: 33.3, tag: "pot_othertop", name_ja: "Blossom様", name_en: "Dear Blossom", },
        { x: 30.1, y: 38.8, tag: "pot_silver", name_ja: "フレンド", name_en: "friend", },
        { x: 32.8, y: 5.1, tag: "pot_silverbronze", name_ja: "フレンド", name_en: "friend", },
        { x: 32.9, y: 26.9, tag: "pot_silverbronze", name_ja: "フレンド", name_en: "friend", },
        { x: 33.2, y: 10.5, tag: "pot_goldsilver", name_ja: "フレンド", name_en: "friend", },
        { x: 33.3, y: 24.9, tag: "pot_otherbottom", name_ja: "Ran様", name_en: "Dear Ran Yumesaki", },
        { x: 34.7, y: 24.7, tag: "pot_goldbronze", name_ja: "不明", name_en: "unknown ", },
        { x: 35.1, y: 18.2, tag: "pot_bronze", name_ja: "フレンド", name_en: "friend", },
        { x: 35.6, y: 28.6, tag: "pot_silverbronze", name_ja: "フレンド", name_en: "friend", },
        { x: 37.1, y: 33.4, tag: "pot_otherbottom", name_ja: "Ran様", name_en: "Dear Ran Yumesaki", },
        { x: 37.5, y: 14.4, tag: "pot_bronze", name_ja: "フレンド", name_en: "friend", },
        { x: 37.9, y: 36.9, tag: "pot_bronze", name_ja: "フレンド", name_en: "friend", },
        { x: 38.9, y: 19.7, tag: "pot_silver", name_ja: "フレンド", name_en: "friend", },
        { x: 39.2, y: 21.1, tag: "pot_silver", name_ja: "フレンド", name_en: "friend", },
        { x: 11.6, y: 10.9, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 34.7, y: 11.8, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 29.2, y: 12.4, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 18.7, y: 13.1, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 38.8, y: 13.7, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 14.5, y: 13.8, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 7.8, y: 14.4, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 5.4, y: 15.2, tag: "treasure_silver", name_ja: "氷雨", name_en: "Hisame", },
        { x: 28.5, y: 15.6, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 22.5, y: 15.7, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 37.0, y: 16.3, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 6.1, y: 16.7, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 11.7, y: 17.3, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 7.8, y: 17.5, tag: "treasure_silver", name_ja: "氷雨", name_en: "Hisame", },
        { x: 36.8, y: 18.6, tag: "treasure_silver", name_ja: "氷雨", name_en: "Hisame", },
        { x: 18.3, y: 18.8, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 4.3, y: 19.5, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 30.9, y: 19.7, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 6.8, y: 19.8, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 35.9, y: 20.1, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 26.3, y: 21.1, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 12.5, y: 22.0, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 6.3, y: 23.4, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 37.2, y: 23.6, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 33.6, y: 23.8, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 16.3, y: 23.9, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 20.9, y: 24.4, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 13.5, y: 24.9, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 7.2, y: 25.3, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 31.8, y: 26.2, tag: "treasure_silver", name_ja: "フレンド", name_en: "friend", },
        { x: 27.0, y: 26.3, tag: "treasure_bronze", name_ja: "フレンド", name_en: "friend", },
        { x: 13.4, y: 28.1, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 15.7, y: 29.0, tag: "treasure_silver", name_ja: "氷雨", name_en: "Hisame", },
        { x: 8.5, y: 29.5, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 34.3, y: 29.6, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 21.6, y: 30.0, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 38.0, y: 30.1, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 26.5, y: 31.3, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 13.9, y: 31.9, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 30.9, y: 32.0, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 6.8, y: 32.7, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 38.8, y: 33.0, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 35.4, y: 33.4, tag: "treasure_silver", name_ja: "氷雨", name_en: "Hisame", },
        { x: 17.5, y: 33.8, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 33.4, y: 33.9, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 10.4, y: 34.0, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 27.3, y: 34.2, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 7.9, y: 34.2, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 22.2, y: 34.4, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 30.1, y: 35.1, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 38.1, y: 35.4, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 5.8, y: 35.4, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 8.5, y: 35.6, tag: "treasure_silver", name_ja: "氷雨", name_en: "Hisame", },
        { x: 24.2, y: 36.9, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 7.1, y: 37.3, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 16.9, y: 37.5, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 9.4, y: 37.5, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 9.7, y: 4.1, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 5.0, y: 4.8, tag: "treasure_silver", name_ja: "氷雨", name_en: "Hisame", },
        { x: 12.4, y: 5.9, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 29.1, y: 6.6, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 6.8, y: 6.9, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 19.1, y: 7.3, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 33.8, y: 7.4, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 3.8, y: 7.8, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 31.2, y: 9.6, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 8.2, y: 9.8, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
        { x: 24.3, y: 9.9, tag: "treasure_bronze", name_ja: "氷雨", name_en: "Hisame", },
      ]
    },
    "The Occult Crescent: North Horn": {
      name_ja: "クレセントアイル：北征編",
      name_en: "The Occult Crescent: North Horn",
      aetheryte: [
        { name_ja: "デジョン先", name_en: "Return point", pos: { x: 39.6, y: 39.6 } },
        { name_ja: "カルナック", name_en: "unknown1", pos: { x: 30.5, y: 32.0 } },
        { name_ja: "沈んだ聖堂前", name_en: "unknown2", pos: { x: 28.6, y: 10.3 } },
        { name_ja: "浮遊遺跡", name_en: "unknown3", pos: { x: 10.5, y: 33.4 } },
        { name_ja: "腐敗した市街地前", name_en: "unknown4", pos: { x: 13.7, y: 12.7 } },
        { name_ja: "妖火の漁村", name_en: "unknown5", pos: { x: 21.1, y: 20.6 } },
        { name_ja: "北ポット", name_en: "North magic pots", pos: { x: 26.1, y: 11.8 } },
        { name_ja: "南ポット", name_en: "South magic pots", pos: { x: 11.2, y: 26.3 } },
      ],
      mapimg: {
        x: 4096,
        y: 4096,
        src: './img/クレセントアイル：北征編_マップ.png',
      },
      mappos: {
        x_min: 1.0,
        y_min: 1.0,
        x_max: 41.9,
        y_max: 41.9,
        x_size: 40.9,
        y_size: 40.9,
      },
      potdata: [
{x:7.4,y:14,tag:"search",name_ja:"hisame",name_en:"",},
{x:10.9,y:38.8,tag:"search",name_ja:"シャウト",name_en:"",},
{x:24.5,y:4.6,tag:"pot_bronze",name_ja:"hisame",name_en:"",},
{x:12.6,y:10.3,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:10.9,y:5.8,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:6.7,y:3.8,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:5.2,y:3.8,tag:"pot_gold",name_ja:"hisame",name_en:"",},
{x:3.9,y:3.4,tag:"search",name_ja:"hisame",name_en:"",},
{x:16.1,y:12.6,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:39.8,y:22.6,tag:"search",name_ja:"hisame",name_en:"",},
{x:34.4,y:18.3,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:34.6,y:10.4,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:13.1,y:2.5,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:29.2,y:6.8,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:22.3,y:19.3,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:21.3,y:19.7,tag:"search",name_ja:"hisame",name_en:"",},
{x:18.2,y:23.4,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:18.1,y:18.4,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:3.3,y:24.4,tag:"search",name_ja:"hisame",name_en:"",},
{x:3,y:25.4,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:9.8,y:16.3,tag:"treasure_bronze",name_ja:"Twitter(現X)",name_en:"",},
{x:21.4,y:5.2,tag:"treasure_silver",name_ja:"Twitter(現X)",name_en:"",},
{x:29.1,y:17.9,tag:"treasure_silver",name_ja:"Twitter(現X)",name_en:"",},
{x:8.3,y:18.3,tag:"treasure_silver",name_ja:"Twitter(現X)",name_en:"",},
{x:35.8,y:26.8,tag:"treasure_bronze",name_ja:"Twitter(現X)",name_en:"",},
{x:9.4,y:21.2,tag:"treasure_bronze",name_ja:"Twitter(現X)",name_en:"",},
{x:5,y:7.5,tag:"treasure_silver",name_ja:"Twitter(現X)",name_en:"",},
{x:27,y:14.3,tag:"treasure_bronze",name_ja:"Twitter(現X)",name_en:"",},
{x:20.9,y:12.6,tag:"treasure_bronze",name_ja:"フレンド",name_en:"",},
{x:12.7,y:24.8,tag:"treasure_bronze",name_ja:"Twitter(現X)",name_en:"",},
{x:36.5,y:31.6,tag:"search",name_ja:"hisame",name_en:"",},
{x:24.4,y:3.9,tag:"treasure_bronze",name_ja:"フレンド",name_en:"",},
{x:40.4,y:10.1,tag:"pot_silver",name_ja:"フレンド",name_en:"",},
{x:9.8,y:37.3,tag:"carrot",name_ja:"Twitter(現X)",name_en:"",},
{x:36.6,y:31.6,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:21.2,y:36.9,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:21.7,y:37.4,tag:"pot_gold",name_ja:"hisame",name_en:"",},
{x:26.4,y:35,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:9.5,y:15.7,tag:"pot_bronze",name_ja:"フレンド",name_en:"",},
{x:10.2,y:12.5,tag:"carrot",name_ja:"フレンド",name_en:"",},
{x:21,y:34,tag:"treasure_silver",name_ja:"hisame",name_en:"",},
{x:15.9,y:32.8,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:8.5,y:40.8,tag:"treasure_silver",name_ja:"hisame",name_en:"",},
{x:4.6,y:36.3,tag:"search",name_ja:"hisame",name_en:"",},
{x:9.6,y:36.8,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:39,y:38,tag:"search",name_ja:"hisame",name_en:"",},
{x:4.5,y:36.8,tag:"treasure_bronze",name_ja:"Twitter(現X)",name_en:"",},
{x:30.4,y:23.5,tag:"treasure_bronze",name_ja:"Twitter(現X)",name_en:"",},
{x:4.3,y:9.4,tag:"treasure_bronze",name_ja:"Twitter(現X)",name_en:"",},
{x:22.9,y:40.3,tag:"pot_silver",name_ja:"フレンド",name_en:"",},
{x:14.6,y:38.7,tag:"pot_gold",name_ja:"フレンド",name_en:"",},
{x:7.5,y:40,tag:"treasure_bronze",name_ja:"フレンド",name_en:"",},
{x:21.4,y:5.2,tag:"treasure_silver",name_ja:"フレンド",name_en:"",},
{x:5.1,y:10.2,tag:"carrot",name_ja:"Twitter(現X)",name_en:"",},
{x:30.2,y:2.9,tag:"pot_bronze",name_ja:"Twitter(現X)",name_en:"",},
{x:40,y:15.9,tag:"carrot",name_ja:"Twitter(現X)",name_en:"",},
{x:16.5,y:6.6,tag:"carrot",name_ja:"Twitter(現X)",name_en:"",},
{x:4.3,y:36.9,tag:"treasure_bronze",name_ja:"Twitter(現X)",name_en:"",},
{x:38.5,y:14.5,tag:"carrot",name_ja:"Twitter(現X)",name_en:"",},
{x:12.3,y:14.1,tag:"pot_bronze",name_ja:"フレンド",name_en:"",},
{x:16.3,y:37.7,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:11.3,y:36.6,tag:"pot_bronze",name_ja:"hisame",name_en:"",},
{x:5.4,y:34.1,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:38.8,y:3.9,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:40.2,y:3.5,tag:"search",name_ja:"hisame",name_en:"",},
{x:29.1,y:17.9,tag:"treasure_silver",name_ja:"フレンド",name_en:"",},
{x:12.7,y:24.8,tag:"treasure_bronze",name_ja:"フレンド",name_en:"",},

{x:27.7,y:26.3,tag:"search",name_ja:"hisame",name_en:"",},
{x:31,y:17.4,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:4.4,y:25.3,tag:"carrot",name_ja:"Twitter(現X)",name_en:"",},
{x:22.3,y:24.8,tag:"treasure_bronze",name_ja:"Twitter(現X)",name_en:"",},
{x:15.7,y:23.9,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:18.5,y:27.5,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:22.7,y:23.9,tag:"search",name_ja:"hisame",name_en:"",},
{x:24.7,y:21.8,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:25.9,y:20.8,tag:"treasure_silver",name_ja:"hisame",name_en:"",},
{x:27.7,y:25,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:18.2,y:20,tag:"pot_silver",name_ja:"フレンド",name_en:"",},
{x:9.8,y:16.3,tag:"treasure_bronze",name_ja:"フレンド",name_en:"",},
{x:2.4,y:35.9,tag:"carrot_unknown",name_ja:"詳細座標募集中！",name_en:"",},
{x:8.8,y:26.3,tag:"treasure_unknown",name_ja:"詳細座標募集中！",name_en:"",},
{x:9.3,y:29,tag:"carrot_unknown",name_ja:"詳細座標募集中！",name_en:"",},
{x:19,y:37,tag:"carrot_unknown",name_ja:"詳細座標募集中！",name_en:"",},
{x:30.5,y:30.8,tag:"treasure_unknown",name_ja:"詳細座標募集中！",name_en:"",},
{x:37.7,y:34.9,tag:"treasure_unknown",name_ja:"詳細座標募集中！",name_en:"",},
{x:36.6,y:19.9,tag:"carrot_unknown",name_ja:"詳細座標募集中！",name_en:"",},
{x:34.2,y:7.5,tag:"treasure_unknown",name_ja:"詳細座標募集中！",name_en:"",},
{x:40.7,y:3.9,tag:"carrot_unknown",name_ja:"詳細座標募集中！",name_en:"",},

{x:23.6,y:10.4,tag:"carrot_unknown",name_ja:"詳細座標募集中！",name_en:"",},
{x:20.8,y:4.3,tag:"carrot_unknown",name_ja:"詳細座標募集中！",name_en:"",},
{x:18.9,y:18.1,tag:"carrot_unknown",name_ja:"詳細座標募集中！",name_en:"",},
{x:7.3,y:13.6,tag:"treasure_unknown",name_ja:"詳細座標募集中！",name_en:"",},
{x:2.9,y:6.6,tag:"treasure_unknown",name_ja:"詳細座標募集中！",name_en:"",},
{x:5.3,y:3.9,tag:"carrot_unknown",name_ja:"詳細座標募集中！",name_en:"",},

{x:35,y:40.6,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:23,y:32.2,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:23.1,y:15.8,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:40.4,y:14.2,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:7.5,y:10.1,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:3.9,y:15.2,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:4.3,y:29.1,tag:"carrot",name_ja:"Twitter(現X)",name_en:"",},
{x:39.1,y:23.7,tag:"carrot",name_ja:"Twitter(現X)",name_en:"",},
{x:21.6,y:20.7,tag:"carrot",name_ja:"Twitter(現X)",name_en:"",},
{x:34.9,y:36,tag:"treasure_bronze",name_ja:"フレンド",name_en:"",},
{x:25.9,y:39.7,tag:"treasure_bronze",name_ja:"フレンド",name_en:"",},
{x:6.5,y:11.6,tag:"pot_bronze",name_ja:"フレンド",name_en:"",},
{x:34.1,y:4.8,tag:"treasure_silver",name_ja:"hisame",name_en:"",},
{x:34.1,y:3.2,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:9.2,y:33,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:11.4,y:36.6,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:17.5,y:5.2,tag:"search",name_ja:"hisame",name_en:"",},
{x:27,y:14.2,tag:"search",name_ja:"hisame",name_en:"",},
{x:22.1,y:5.9,tag:"pot_silver",name_ja:"Twitter(現X)",name_en:"",},
{x:21.5,y:4,tag:"pot_bronze",name_ja:"hisame",name_en:"",},
{x:26,y:39.5,tag:"carrot",name_ja:"hisame",name_en:"",},
{x:16.3,y:16.1,tag:"treasure_bronze",name_ja:"フレンド",name_en:"",},
{x:34.6,y:14.1,tag:"treasure_bronze",name_ja:"フレンド",name_en:"",},
{x:37.7,y:8.3,tag:"treasure_bronze",name_ja:"フレンド",name_en:"",},
{x:24.4,y:4,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:21.4,y:5.2,tag:"treasure_silver",name_ja:"hisame",name_en:"",},
{x:26.5,y:9.3,tag:"treasure_bronze",name_ja:"フレンド",name_en:"",},
{x:14.6,y:38.7,tag:"pot_bronze",name_ja:"hisame",name_en:"",},
{x:16.3,y:22.5,tag:"carrot",name_ja:"シャウト",name_en:"",},
{x:21.3,y:33.7,tag:"pot_silver",name_ja:"PTメンバー",name_en:"",},
{x:16.8,y:7,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:27.2,y:14.1,tag:"carrot",name_ja:"Twitter(現X)",name_en:"",},
{x:11.4,y:4.1,tag:"carrot",name_ja:"Twitter(現X)",name_en:"",},
{x:9.4,y:40.2,tag:"carrot",name_ja:"hisame",name_en:"",},
{x:5.9,y:29,tag:"treasure_bronze",name_ja:"hisame",name_en:"",},
{x:33.9,y:4.5,tag:"carrot",name_ja:"Twitter(現X)",name_en:"",},








      ]
    },
  }
  let informant = "情報提供"
  lang_push()
  function lang_push() {//言語設定
    switch (lang) {
      case "en":
        document.querySelector("label[for='id_change_treasure']").textContent = "box switch"
        document.querySelector("label[for='id_change_pot']").textContent = "pot switch"
        document.querySelector("label[for='id_change_border']").textContent = "border switch"
        document.querySelector("label[for='id_map_select']").textContent = "map select"
        document.querySelector("button#id_reset").textContent = "reset & map reload"
        informant = "Information provided by"
        break;
      case "ja":
        document.querySelector("label[for='id_change_treasure']").textContent = "宝箱表示切替"
        document.querySelector("label[for='id_change_pot']").textContent = "マジポ表示切替"
        document.querySelector("label[for='id_change_border']").textContent = "格子表示切替"
        document.querySelector("label[for='id_map_select']").textContent = "マップ選択"
        document.querySelector("button#id_reset").textContent = "リセット&マップ読み込み"
        informant = "情報提供"
        break;
    }
  }
  function 未使用() {
    const id_canvas_list_fill = document.getElementById("id_canvas_list_fill")
    const id_canvas_list_circle = document.getElementById("id_canvas_list_circle")
    const id_map_none = document.getElementById("id_map_none")

  }


  // #region メモ
  // 100px=距離1=方眼1
  // マップのサイズ設定は慎重にすること
  // ↑mapimg pixel指定、マップimgの解像度は問わない
  // mappos 関連はすべて座標、始点と終点はここで指定、引き算間違えないでね
  // 全体が4096pxで、始点1の終点41.9なのでほぼ確定
  // 4096pxの場合、100px=座標1=方眼1(≒1-41,9である事)を利用して
  // (座標-座標min)*100で呼んでるので、マジで間違えないように
  // leafletでは[y,x]と記述するので注意
  // #endregion

  // #region バグ
  // contextを右クリで起動する事、ドラッグアンドドロップできることを追記
  // #endregion


  // 各種チェックボックス
  const id_change_treasure = document.querySelector("#id_change_treasure")
  id_change_treasure.addEventListener('click', () => {
    checkbox_change()
  })
  const id_change_pot = document.querySelector("#id_change_pot")
  id_change_pot.addEventListener('click', () => {
    checkbox_change()
  })
  const id_change_border = document.querySelector("#id_change_border")
  id_change_border.addEventListener('click', () => {
    checkbox_change()
  })
  const id_change_carrot = document.querySelector("#id_change_carrot")
  id_change_carrot.addEventListener('click', () => {
    checkbox_change()
  })
  const id_change_search = document.querySelector("#id_change_search")
  id_change_search.addEventListener('click', () => {
    checkbox_change()
  })
  function checkbox_change() {
    const id_all = document.querySelector("#id_all")
    if (id_change_pot.checked) {
      id_all.classList.remove("hidden_pot")
    } else {
      id_all.classList.add("hidden_pot")
    }
    if (id_change_treasure.checked) {
      id_all.classList.remove("hidden_treasure")
    } else {
      id_all.classList.add("hidden_treasure")
    }
    if (id_change_border.checked) {
      id_all.classList.remove("hidden_border")
    } else {
      id_all.classList.add("hidden_border")
    }
    if (id_change_carrot.checked) {
      id_all.classList.remove("hidden_carrot")
    } else {
      id_all.classList.add("hidden_carrot")
    }
    if (id_change_search.checked) {
      id_all.classList.remove("hidden_search")
    } else {
      id_all.classList.add("hidden_search")
    }
  }
  checkbox_change()



  function mapload(mapname) {
    const mapnow = mapdata[mapname]
    const mapimg = mapnow["mapimg"]
    const mappos = mapnow["mappos"]

    // #region 各種関数
    function pos_load(input) {// (座標-座標min)*100で呼んでるだけ、leaflet準拠
      let x = (input.x - mappos.x_min) * 100
      let y = mapimg.y - (input.y - mappos.y_min) * 100
      return { x: x, y: y }
    }
    const CanvasOverlay = L.ImageOverlay.extend({//canvasload用
      _initImage: function () {
        this._image = L.DomUtil.create('canvas', 'leaflet-image-layer ' + (this._zoomAnimated ? 'leaflet-zoom-animated' : ''));
        // if (this.options.crossOrigin) { this._image.crossOrigin = ''; }
        this._image.src = this._url;
      },
      getCanvas: function () {
        return this._image;
      }
    });
    function tan_load(degree) {//三角関数を角度から呼ぶだけ
      let rad = Math.PI / 180 * degree
      let tan = Math.tan(rad)
      // console.log(tan)
      return tan
      // 対辺=隣辺*tanΘ
      // 隣辺=対辺/tanΘ
    }
    function border_tan(pos_x, pos_y, max_x, max_y, degree) {//始点座標と最大座標と角度を与えられたら端の座標を返す
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
    function degree_split(firstdegree, num) {//開始角、分割幅から配列を返す(22.5,8=>[22.5,67.5...])
      let array = []
      for (let index = 0; index < num; index++) {
        array.push(firstdegree + 360 / num * index)
      }
      return array
    }
    // #endregion

    // #region 初期化

    const id_select_list_aetheryte = document.getElementById("id_select_list_aetheryte")
    fia_element_clear(id_select_list_aetheryte)
    if (leaflet_map) { leaflet_map.remove(); }
    // #endregion

    // #region mapimg読み込み

    const idmap = document.querySelector("#map")
    const bounds = [[0, 0], [mapimg.y, mapimg.x]];
    leaflet_map = L.map('map', {
      crs: L.CRS.Simple,//ゲームマップのような平面
      maxBounds: bounds,// 画面を範囲内に制限
      maxBoundsViscosity: 1.0, // 範囲外へ引っ張っても完全に跳ね返る（固くなる）
      minZoom: -10, // どこまで縮小できるか
      maxZoom: 0,  // どこまで拡大できるか
      zoomSnap: 0,//整数縛り拒否
    });


    leaflet_map.createPane('Pane_fill');
    leaflet_map.getPane('Pane_fill').style.zIndex = 401;

    leaflet_map.createPane('Pane_border');
    leaflet_map.getPane('Pane_border').style.zIndex = 402;

    leaflet_map.createPane('Pane_pot');
    leaflet_map.getPane('Pane_pot').style.zIndex = 602;

    leaflet_map.createPane('Pane_treasure');
    leaflet_map.getPane('Pane_treasure').style.zIndex = 604;

    leaflet_map.createPane('Pane_carrot');
    leaflet_map.getPane('Pane_carrot').style.zIndex = 603;

    leaflet_map.createPane('Pane_search');
    leaflet_map.getPane('Pane_search').style.zIndex = 601;


    L.imageOverlay(mapimg.src, bounds).addTo(leaflet_map);//張る


    function updateMapSize() {
      const mapSize = leaflet_map.getSize(); // {x: width, y: height}
      const zoomX = Math.log2(mapSize.x / mapimg.x);
      const zoomY = Math.log2(mapSize.y / mapimg.y);
      const perfectMinZoom = Math.min(zoomX, zoomY);
      console.log(perfectMinZoom)
      leaflet_map.setMinZoom(perfectMinZoom);
      leaflet_map.setMaxZoom(perfectMinZoom + 5);
      leaflet_map.setView([mapimg.y / 2, mapimg.x / 2], Math.floor(leaflet_map.getMinZoom()));
      leaflet_map.whenReady(() => {
        leaflet_map.setView([mapimg.y / 2, mapimg.x / 2], Math.floor(leaflet_map.getMinZoom()));
      });
    }
    updateMapSize();

    let queue = null;
    window.addEventListener('resize', () => {
      clearTimeout(queue);
      queue = setTimeout(() => { updateMapSize() }, 200);
    });
    // #endregion

    // #region アイコン、右クリック関連

    icon_load()
    function icon_load() {

      // 距離が0.5,2,4で反応テキストが変わる
      const icon_size = 0.5 * 50
      function createPotIcon(fileName, customClass) {
        return L.icon({
          iconUrl: `./img/${fileName}`,
          iconSize: [icon_size, icon_size],
          iconAnchor: [icon_size / 2, icon_size / 2],
          popupAnchor: [0, -icon_size / 2],
          className: `icon ${customClass}`,
        });
      }
      // /* マップ、fill、border、contextmenu、pot、treasureの順 */
      const Icon = {
        pot_gold: [createPotIcon('金.png', 'pot gold'), 'pot'],
        pot_silver: [createPotIcon('銀.png', 'pot silver'), 'pot'],
        pot_bronze: [createPotIcon('銅.png', 'pot bronze'), 'pot'],
        pot_goldsilver: [createPotIcon('金銀.png', 'pot gold silver'), 'pot'],
        pot_goldbronze: [createPotIcon('金銅.png', 'pot gold bronze'), 'pot'],
        pot_silverbronze: [createPotIcon('銀銅.png', 'pot silver bronze'), 'pot'],
        pot_goldsilverbronze: [createPotIcon('金銀銅.png', 'pot gold silver bronze'), 'pot'],
        pot_othertop: [createPotIcon('灰上.png', 'pot othertop'), 'pot'],
        pot_otherbottom: [createPotIcon('灰下.png', 'pot otherbottom'), 'pot'],
        treasure_bronze: [createPotIcon('銅箱.png', 'treasure bronze'), 'treasure'],
        treasure_silver: [createPotIcon('銀箱.png', 'treasure silver'), 'treasure'],
        treasure_unknown: [createPotIcon('銅箱_不明.png', 'treasure unknown'), 'treasure'],
        carrot: [createPotIcon('carrot.png', 'carrot'), 'carrot'],
        carrot_unknown: [createPotIcon('carrot_不明.png', 'carrot unknown'), 'carrot'],
        search: [createPotIcon('search.png', 'search'), 'search'],
      };
      let potarray = []
      mapnow["potdata"].forEach(element => {
        let obj = pos_load(element)
        let tag = element["tag"]
        let mk = L.marker([obj.y, obj.x], { icon: Icon[tag][0], pane: "Pane_" + Icon[tag][1] }).addTo(leaflet_map)
          .bindPopup(element["name_" + lang] + "<br>" + "x:" + element.x + " y;" + element.y, { className: 'custom_popup_text' })
        if (Icon[tag][1] === "pot") {
          potarray.push(mk)
        }
      });

      const imageWidth = 800;
      const imageHeight = 800;
      const movingimage =
        L.imageOverlay(
          './img/座標.png',
          [[0, 0], [imageWidth, imageHeight]],
          { opacity: 1 },
        ).addTo(leaflet_map);//張る
      movingimage.setOpacity(movingimage.options.opacity === 1 ? 0 : 1);

      function move(e, bool) {
        function getBoundsFromCenter(center, width, height) {
          const halfWidth = width / 2;
          const halfHeight = height / 2;

          const southWest = L.latLng(center.lat - halfHeight, center.lng - halfWidth);
          const northEast = L.latLng(center.lat + halfHeight, center.lng + halfWidth);

          return L.latLngBounds(southWest, northEast);
        }
        const newBounds = getBoundsFromCenter(e.latlng, imageWidth, imageHeight);
        movingimage.setBounds(newBounds);
        movingimage.setOpacity(movingimage.options.opacity === 1 ? 0 : 1);
        if (bool) {
          movingimage.setOpacity(1);
        }
      }

      potarray.forEach(element => {
        element.addEventListener("click", (e) => { move(e, true) });
      })
      leaflet_map.on('contextmenu', (e) => { move(e) });

    }
    // #endregion



    // #region エーテライト関連
    aetheryte_load()
    function aetheryte_load() {

      mapnow["aetheryte"].forEach(element => {
        // canvasを生成、#エテラ名[data-border='エテラ名']
        const layer_border = new CanvasOverlay('', bounds, { pane: 'Pane_border', opacity: 0.3 }).addTo(leaflet_map);
        const canvas_border = layer_border.getCanvas();
        canvas_border.width = mapimg.x
        canvas_border.height = mapimg.y
        canvas_border.classList.add("border")
        canvas_border.dataset.border = element["name_en"]

        // canvasを生成、#エテラ名[data-fill='エテラ名']
        const layer_fill = new CanvasOverlay('', bounds, { pane: 'Pane_fill', opacity: 0.5 }).addTo(leaflet_map);
        const canvas_fill = layer_fill.getCanvas();
        canvas_fill.width = mapimg.x
        canvas_fill.height = mapimg.y
        canvas_fill.classList.add("fill")
        canvas_fill.dataset.fill = element["name_en"]



        let pixel_xy = {//指定位置の座標(pixel)
          x: (element["pos"].x - mappos["x_min"]) / mappos["x_size"] * mapimg.x,
          y: (element["pos"].y - mappos["y_min"]) / mappos["y_size"] * mapimg.y
        }



        function aetheryte_border() {
          const ctx_border = fia_canvas_reset(canvas_border)

          let degree_list = degree_split(360 / 8 / 2, 8)
          degree_list.forEach(degree => {
            let next = border_tan(pixel_xy.x, pixel_xy.y, mapimg.x, mapimg.y, degree) //始点座標と最大座標と角度を与えられたら端の座標を返す
            fia_draw_line(ctx_border, [{ x: pixel_xy.x, y: pixel_xy.y }, next,], "stroke", "#ff00ff", 6)//そこに向かって線を引く
          })
        }
        function aetheryte_fill(value) {
          const ctx_fill = fia_canvas_reset(canvas_fill)
          let array = [{ x: pixel_xy.x, y: pixel_xy.y }]
          direction_select[value]["path"].forEach(path => {
            array.push(direction_data[path])
          })
          fia_draw_line(ctx_fill, array, "fill", "#black")
        }


        const direction_select = {
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
        const direction_data = {//16方位は東西南北〆、4方位は四隅
          "↗NNE": border_tan(pixel_xy.x, pixel_xy.y, mapimg.x, mapimg.y, 360 / 8 / 2 + 360 / 8 * 0),
          "↗NE ": { x: mapimg.x, y: 0 },
          "↗ENE": border_tan(pixel_xy.x, pixel_xy.y, mapimg.x, mapimg.y, 360 / 8 / 2 + 360 / 8 * 1),
          "↘ESE": border_tan(pixel_xy.x, pixel_xy.y, mapimg.x, mapimg.y, 360 / 8 / 2 + 360 / 8 * 2),
          "↘SE ": { x: mapimg.x, y: mapimg.y },
          "↘SSE": border_tan(pixel_xy.x, pixel_xy.y, mapimg.x, mapimg.y, 360 / 8 / 2 + 360 / 8 * 3),
          "↙SSW": border_tan(pixel_xy.x, pixel_xy.y, mapimg.x, mapimg.y, 360 / 8 / 2 + 360 / 8 * 4),
          "↙SW ": { x: 0, y: mapimg.y },
          "↙WSW": border_tan(pixel_xy.x, pixel_xy.y, mapimg.x, mapimg.y, 360 / 8 / 2 + 360 / 8 * 5),
          "↖WNW": border_tan(pixel_xy.x, pixel_xy.y, mapimg.x, mapimg.y, 360 / 8 / 2 + 360 / 8 * 6),
          "↖NW ": { x: 0, y: 0 },
          "↖NNW": border_tan(pixel_xy.x, pixel_xy.y, mapimg.x, mapimg.y, 360 / 8 / 2 + 360 / 8 * 7),
        }

        select_edit()
        function select_edit() {
          //select作成
          const div = fia_element_create("div")
          id_select_list_aetheryte.append(div)

          const label = fia_element_create("label")
          div.append(label)
          label.textContent = element["name_" + lang]

          const select = fia_element_create("select")
          label.append(select)

          // 一覧オプション作成
          Object.keys(direction_select).forEach(element => {
            const option = fia_element_create("option")
            select.append(option)
            option.value = direction_select[element]["name_en"]
            option.textContent = direction_select[element]["name_" + lang]
          })


          //borderは自動で塗る
          aetheryte_border()
          //fillはchangeで塗る
          select.addEventListener('change', () => { aetheryte_fill(select.value) })
        }
      })
    }
    // #endregion
  }

  const id_map_select = document.getElementById("id_map_select")
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
  id_map_select.value = "The Occult Crescent: North Horn"
  mapload(id_map_select.value)//初回実行
  document.getElementById("id_reset").addEventListener('click', () => {
    mapload(id_map_select.value)
  })

})