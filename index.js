
const doraemon = document.querySelector("#doraemon")
const qrcode_doraemon = document.querySelector(".doraemon")
const width = document.documentElement.clientWidth

function previewQrCode(target, show) {
    target.addEventListener("mouseenter", () => {
        show.classList.add("show")
    })
    target.addEventListener("mouseleave", () => {
        if (Array.from(show.classList).indexOf("show") >= 0) {
            show.classList.remove("show");
        }
    })
}
if (width > 500) {
    
    previewQrCode(doraemon, qrcode_doraemon)
    
}