'use strict';
document.addEventListener('DOMContentLoaded', () => {

  let BINGO = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  const BINGOscore = [
    undefined,
    undefined, undefined, undefined, undefined, undefined,
    10000, 36, 720, 360, 80,
    252, 108, 72, 54, 180,
    72, 180, 119, 36, 306,
    1080, 144, 1800, 3600, undefined
  ]

  const cells = document.querySelectorAll('.cell')

  function result_reset() {
    cells.forEach(cell => {
      cell.classList.remove('cellred')
      cell.classList.remove('cellblue')
    })
  }

  function input_load() {
    let now_check = 0
    let cell_text = ""

    cells.forEach(cell => {
      if (cell.value !== "?") {
        cell_text = cell_text + cell.value
        now_check++
      } else {
        cell_text = cell_text + cell.value
      }
    })
    // console.log(cell_text)
    // console.log(now_check)
    return [now_check, cell_text]
  }
  function data_export(now_check, cell_text, cell) {
    try {
      const next_index = selectexpectedAll[now_check][cell_text]
      // const next_index = selectexpectedAll[now_check][cell_text][0]//full専用
      // const next_score = selectexpectedAll[now_check][cell_text][1]//full専用

      for (let index = 0; index < next_index.length; index++) {
        if (now_check !== 4) {
          cells[next_index[index]].classList.add('cellred')
        } else {
          cells[next_index[index]].classList.add('cellblue')
        }
      }
    } catch (error) {
      cell.classList.add('cellred')

    }
  }
  function mini_mein(cell) {
    result_reset()
    let [now_check, cell_text] = input_load()
    data_export(now_check, cell_text, cell)
  }
  function input_reset() {
    for (let index = 0; index < cells.length; index++) {
      cells[index].value = "?";
    }
  }

  for (let index = 0; index < cells.length; index++) {
    cells[index].addEventListener('change', () => {
      mini_mein(cells[index])
    });
  }
  document.getElementById("reset").addEventListener('click', () => {
    input_reset()
    result_reset()
  });
});
