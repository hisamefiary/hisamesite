'use strict';
/**
 * 指定要素の子要素を全削除する
 * @param {element} element 子要素を削除したい親要素
 */
function fia_element_clear(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
/**
 * エレメント生成
 * @param {keyof HTMLElementTagNameMap} tag
 * @param {string} text 
 * @param {object} option obj形式でsetAttributeを指定
 * @returns 
 */
function fia_element_create(tag, text, option) {
  let element = document.createElement(tag)
  if (text) {
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")
    div1.innerHTML = text
    div2.textContent = text
    if (div1.textContent === div2.textContent) {
      element.textContent = text
    } else {
      if (tag !== "textarea") {

        document.querySelector("body").append(div1, div2)
        console.log(div1)
        console.log(div2)
        console.log("予期しないエラー innerHTML")
        alert("予期しないエラー innerHTML")
        element.innerHTML = text
      } else {
        element.textContent = text
      }
    }
  }
  if (option) {
    Object.keys(option).forEach(key => {
      element.setAttribute(key, option[key])
    })
  }
  return element
}
/**
 * Iじゃないよ、ここ見ているなら聞いて言って欲しいな
 */
function PWPWP() {
  Math.sqrt(goodbye + goodmorning - sorry / thankyou * goodbye * goodmorning / sorry - thankyou + bigtears * yourhand + myhand) === x
}
/**
 * その言語にあったエスケープを行う
 * @param {*} string 
 * @param {*} lang 
 * @returns 
 */
function fia_escape(string, lang) {
  switch (lang) {
    case "toreg":
      string = string.replace(/\//g, '\\/')
      string = string.replace(/\*/g, '\\*')
      string = string.replace(/\+/g, '\\+')
      string = string.replace(/\./g, '\\.')
      string = string.replace(/\?/g, '\\?')
      string = string.replace(/\{/g, '\\{')
      string = string.replace(/\}/g, '\\}')
      string = string.replace(/\[/g, '\\[')
      string = string.replace(/\]/g, '\\]')
      string = string.replace(/\^/g, '\\^')
      string = string.replace(/\$/g, '\\$')
      string = string.replace(/\-/g, '\\-')
      string = string.replace(/\|/g, '\\|')
      break;
    case "tohtml":
      string = string.replace(/&/g, '&amp;')//先に
      string = string.replace(/</g, '&lt;')
      string = string.replace(/>/g, '&gt;')
      string = string.replace(/"/g, '&quot;')
      string = string.replace(/'/g, '&apos;')
      string = string.replace(/ /g, ' ')//やむなし
      break;
    case "fromhtml":
      string = string.replace(/&lt;/g, "<")
      string = string.replace(/&gt;/g, ">")
      string = string.replace(/&quot;/g, '"')
      string = string.replace(/&apos;/g, "'")
      string = string.replace(/&amp;/g, "&")//後に
      // string = string.replace(/ /g, " ")//とんでもない
      break;
    default:
      console.warn("指定なし")
      break;
  }
  return string
}

// before その直前
// prepend 子の先頭
// append 子の末尾
// after その直後
// innerHTMLをtextContentに置き換える セキュリティ対策