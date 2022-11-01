const quotePh = document.querySelector(".quote")
const quoteBtn = document.getElementById("new-quote")
const quoteBtnTxt = document.querySelector("#new-quote span")
const copyBtn = document.getElementById("copy-quote")
const author = document.querySelector(".author")
const shareBtn = document.getElementById("share-whatsapp")
shareBtn.addEventListener("click", shareOnWhatsapp)
quoteBtn.addEventListener("click", newQuote)
copyBtn.addEventListener("click", copyQuote)
function newQuote() {
  quoteBtnTxt.innerText = "Be patient..."
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((jsonObj) => {
      console.log(jsonObj)
      quotePh.innerText = jsonObj.content
      author.innerText = "By " + jsonObj.author
      quoteBtnTxt.innerText = "Get one"
    })
}
function copyQuote() {
  navigator.clipboard.writeText(quotePh.innerText)
}

function shareOnWhatsapp() {
  const whatsAppUrl = `https://wa.me/?text=${quotePh.innerText}`
  window.open(whatsAppUrl, "_blank")
}
