var lista = document.getElementById("lista")
var imagem = document.getElementById("imagem")


function mudarFoto() {
    imagem.src = lista.value
    let p = lista.selectedIndex
    legenda.innerText = lista.options[p].innerText
    
}

lista.addEventListener('charnge', mudarFoto)