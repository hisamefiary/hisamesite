'use strict';
function header_create(type) {
  const body = document.querySelector("html>body")

  let header = element_create("header");
  body.prepend(header);

  let a = element_create("a", undefined, { href: "https://hisamefiary.github.io/hisamesite/main/list/home/" })
  a.classList.add("headerlink")

  let img = element_create("img", undefined, { src: "../../other/icon.png", style: " height: 3rem;", })
  let span = element_create("span", "hisamesite")
  a.append(img, span)

  let title_text
  const title = document.querySelector("title")
  if (title === null) { title_text = "titleエラー" } else { title_text = title.innerHTML }
  let h1 = element_create("h1", title_text)

  header.append(a, h1)
}
function footer_create(type) {
  const body = document.querySelector("html>body")

  let footer = element_create("footer")
  body.append(footer);

  let p1 = element_create("p")
  let a1 = element_create("a", "X(旧Twitter)", { href: "https://x.com/hisamefiary", rel: 'noopener noreferrer', target: "_blank", })
  p1.append("不具合・ご意見・ご要望等ございましたら、", a1, "にDMやリプをお願いします", element_create("br"), "録画やスクリーンショットがあると助かります")

  let p2 = element_create("p")
  p2.append("当サイトは特に注釈が無い場合、PC版chromeを960×1080)", element_create("br"), "つまり通常のディスプレイの半分で開いた状態で使うことを想定して作られています")

  let p4 = element_create("p")
  p4.append("使いやすさだけを追い求めているためほぼ無機質です", element_create("br"), "利便性改善のための装飾はいつか作るかもしれません")

  let p6 = element_create("p", "© Hisame Fiary", { id: "copyright" })

  footer.append(p1, p2, p4, p6)
  switch (type) {
    case "xivtool":
      const copyright = footer.querySelector("#copyright")
      copyright.prepend("© SQUARE ENIX", element_create("br"))
      break;
    default:
      break;
  }

}
function update_create(datas) {

  const main = document.querySelector("html>body>main")

  const update_log = element_create("div", undefined, { class: "update_log" })
  main.append(update_log)
  const dl = element_create("dl")
  update_log.append(dl)



  let li
  li = dtdd_create(dl, [["確認されている不具合",], datas["bug_list"]])
  li = dtdd_create(dl, [["今後の更新予定",], datas["next_list"]])

  const details = element_create("details", undefined, { class: "fia_details" })
  const summary = element_create("summary", "更新履歴")

  dl.append(details)
  details.append(summary)
  datas["update_list"].forEach(element => {
    dtdd_create(details, element)
  });

  function dtdd_create(mother, data) {
    if (data[0]) {
      let span1 = element_create("dt", undefined, { class: "version" })
      data[0].forEach(text => { span1.append(text) })
      span1.append(element_create("br"))
      mother.append(span1)
    }
    if (data[1]) {
      let spandes = element_create("dd", undefined, { class: "description" })
      data[1].forEach(text => { spandes.append(text, element_create("br")) })
      mother.append(spandes)
    }
  }
}
document.addEventListener('DOMContentLoaded', () => {
  header_create(fia_data.header)
  footer_create(fia_data.footer)
});