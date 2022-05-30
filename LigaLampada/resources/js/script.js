function TrocarImagem() {
    let elemento = document.getElementById("myimage")

    if (elemento.src.match("bulbon")) {
        elemento.src = "resources/images/pic_bulboff.png"

    } else {
        elemento.src = "resources/images/pic_bulbon.png"
    }
}