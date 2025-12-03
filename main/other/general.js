'use strict';
function element_clear(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
function element_create(tag, innerhtml, option) {
  let element = document.createElement(tag)
  if (innerhtml) {
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")
    div1.innerHTML = innerhtml
    div2.textContent = innerhtml
    if (div1.textContent === div2.textContent) {
      element.textContent = innerhtml
    } else {
      if (tag !== "textarea") {

        document.querySelector("body").append(div1, div2)
        console.log(div1)
        console.log(div2)
        console.log("予期しないエラー innerHTML")
        alert("予期しないエラー innerHTML")
        element.innerHTML = innerhtml
      } else {
        element.textContent = innerhtml
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
// before その直前
// prepend 子の先頭
// append 子の末尾
// after その直後
function Equationx() {//いつもの
  Math.sqrt(goodbye + goodmorning - sorry / thankyou * goodbye * goodmorning / sorry - thankyou + bigtears * yourhand + myhand) === x
}

// innerHTMLをtextContentに置き換える セキュリティ対策