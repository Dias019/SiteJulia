const Compre = document.getElementById('compre')
const home = document.getElementById('voltar')

function showCompre(){
    let url = encodeURIComponent(window.location.href)
    let showurl = `https://hotmart.com/pt-br/marketplace/produtos/lash-iniciante-by-juuelen/F82596959W?ori=1&_hi=eyJjaWQiOiIxNjkzMjQ3NjI3MDU4NjMxOTEyMzg2Mzg4ODMxMDAwIiwiYmlkIjoiMTY5MzI0NzYyNzA1ODYzMTkxMjM4NjM4ODgzMTAwMCIsInNpZCI6ImJiZWY3ZjAzZTA3ZjRiMThiYjg0MGY4MTA4YzY4MDJiIn0=.1693350961525`
    window.open(showurl)
}

function showHome(){
    let url = encodeURIComponent(window.location.href)
    let showurl = `http://127.0.0.1:5500/teste/Projeto%20P%C3%A1gina%20pessoal/index.html`
    window.open(showurl)
}


Compre.addEventListener('click',showCompre)
home.addEventListener('click',showHome)