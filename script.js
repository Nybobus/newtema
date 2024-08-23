const btn1 = document.querySelector(`#btn1`)
const btn2 = document.querySelector(`#btn2`)
const body = document.querySelector(`body`)
const img = document.querySelector(`.img`)


btn1.onclick = () => {
    body.classList.toggle(`red`)
}

btn2.onclick = () => {
    img.classList.toggle(`hidden`)
}



const btn3 = document.querySelector(`#btn3`)


btn3.onclick = () => {
    const maxWidth = window.innerWidth - btn3.offsetWidth
    const maxHeight = window.innerWidth - btn3.offsetHeight

    const randomX = Math.floor(Math.random() * maxWidth / 5)
    const randomY = Math.floor(Math.random() * maxHeight / 5)
    console.log(randomX, randomY);

    btn3.style.transform = `translate(${randomX}px , ${randomY}px)`
    
}

const btn4 = document.querySelector(`#btn4`)
const img2 = document.querySelector(`.img2`)

btn4.onclick = () => {
    img.classList.toggle(`hidden`)
    img2.classList.toggle(`hidden`)
}