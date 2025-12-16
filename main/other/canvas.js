/**
 * キャンパス生成
 * @param {number} width
 * @param {number} height
 * @returns {object} canvas
 */
function fia_canvas_create(canvas_width, canvas_height) {
  const canvas = fia_element_create("canvas", undefined, { width: canvas_width, height: canvas_height, })
  return canvas
}

/**
 * キャンパスを白紙に戻す
 * @param {object} canvas
 * @returns {object} ctx
 */
function fia_canvas_reset(canvas) {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  return ctx
}

/**
 * ctxとarrayから直線を引き、線か面を塗る
 * @param {object} ctx canvas.getContext('2d')
 * @param {array} xy_array [{x:0,y:0},{x:10,y:10},]
 * @param {string} cate fill or stroke
 * @param {string} color Color Codes
 * @param {number} linewidth linewidth(stroke only)
 */
function fia_draw_line(ctx, xy_array, cate, color, linewidth) {//一般的な線のdraw
  ctx.beginPath();
  xy_array.forEach((element, index) => {
    if (index == 0) {
      ctx.moveTo(element.x, element.y);
    } else {
      ctx.lineTo(element.x, element.y)
    }
  })
  ctx.closePath();
  switch (cate) {
    case "fill":
      ctx.fillStyle = color
      ctx.fill();
      break;
    case "stroke":
      ctx.strokeStyle = color
      ctx.lineWidth = linewidth
      ctx.stroke();
      break;
    default:
      alert("エラー(drow指定無し、製作者に連絡してください)")
      throw "エラー(drow指定無し、製作者に連絡してください)";
  }
}

/**
 * ctxとarrayから円を引き、線か面を塗る
 * @param {object} ctx canvas.getContext('2d')
 * @param {array} startarray [{x:0,y:0},] lineと共用の為arrayに格納
 * @param {string} cate fill or stroke
 * @param {number} size circle size
 * @param {array} degree [0,180] 開始と終了角度
 * @param {string} color Color Codes
 * @param {number} linewidth linewidth(stroke only)
 */
function fia_draw_circle(ctx, startarray, cate, size, deg, color, linewidth) {//一般的な円のdraw
  let x = startarray[0].x
  let y = startarray[0].y
  function degtoarc(deg) {
    return (deg + 270) / 360 * 2 * Math.PI
  }
  ctx.beginPath();//パスを開始

  if ((Math.abs(deg[0] - deg[1]) % 360) === 0) {
    //360の倍数ならスキップ
  } else {
    ctx.moveTo(x, y);//座標移動
  }
  ctx.arc(x, y, size, degtoarc(deg[0]), degtoarc(deg[1]));//円弧追記
  ctx.closePath();//パスを終了
  switch (cate) {
    case "fill":
      ctx.fillStyle = color
      ctx.fill();
      break;
    case "stroke":
      ctx.strokeStyle = color
      ctx.lineWidth = linewidth;
      ctx.stroke();
      break;
    default:
      alert("エラー(drow指定無し、製作者に連絡してください)")
      throw "エラー(drow指定無し、製作者に連絡してください)";
  }
}
/**
 * ctxに画像を投げ込むだけ、await対応済
 * @param {*} ctx 書くctx
 * @param {*} image 画像のurl
 * @param {*} dx 左上のx座標
 * @param {*} dy 左上のy座標
 * @param {*} dWidth 幅
 * @param {*} dHeight 高
 */
async function fia_draw_img(ctx, src, dx, dy, dWidth, dHeight) {
  const image = new Image();
  image.src = src;
  await new Promise(resolve => {
    image.addEventListener('load', resolve, { once: true });
  });
  ctx.drawImage(image, dx, dy, dWidth, dHeight)
}

