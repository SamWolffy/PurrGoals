const links = document.querySelectorAll(".sidebar a");

links.forEach((link) => {
    link.addEventListener("click", () => {
        const destino = link.getAttribute("href")

        const pagDestino = document.querySelector(destino)

        const pagAtual = document.querySelector(".pagina.ativa")

        pagAtual.classList.remove("ativa")
        pagDestino.classList.add("ativa")

        const itemAtual = document.querySelector(".sidebar .selecionada")

        itemAtual.classList.remove("selecionada")

        link.parentElement.classList.add("selecionada")

        link.addEventListener("click", (event) => {
            event.preventDefault()
        })
    })
})
