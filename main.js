const whatsapp = document.getElementById('wpp')
const instagram = document.getElementById('insta')
const saibaMais = document.getElementById('sbm')
const catalogo = document.getElementById('catalogo')
const curso = document.getElementById('curso')




function showWpp(){
    let url = encodeURIComponent(window.location.href)
    let showurl = `https://api.whatsapp.com/send/?phone=19997638464&text&type=phone_number&app_absent=0${url}`
    window.open(showurl)
}

function showInsta(){
    let url = encodeURIComponent(window.location.href)
    let showurl = `https://instagram.com/juuelencilios?igshid=MzRlODBiNWFlZA==${url}`
    window.open(showurl)
}


function showCatalogo(){
    let url = encodeURIComponent(window.location.href)
    let showurl = `https://www.canva.com/design/DAFfKVYl1d8/Ld9e7oCQ5MbQC1CvWbvRQg/view?utm_content=DAFfKVYl1d8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1${url}`
    window.open(showurl)
}

function showCurso(){
    let url = encodeURIComponent(window.location.href)
    let showurl = `http://127.0.0.1:5500/teste/Projeto%20P%C3%A1gina%20pessoal/saibaMais.html`
    window.open(showurl)
}

function showhome(){
    let url = encodeURIComponent(window.location.href)
    let showurl = `http://127.0.0.1:5500/teste/Projeto%20P%C3%A1gina%20pessoal/index.html`
    window.open(showurl)
}



whatsapp.addEventListener('click',showWpp)
instagram.addEventListener('click',showInsta)
catalogo.addEventListener('click',showCatalogo)
curso.addEventListener('click',showCurso)
home.addEventListener('click',showhome)


