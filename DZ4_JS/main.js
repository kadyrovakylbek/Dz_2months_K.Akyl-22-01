const posX = document.getElementById('posX')
const posY = document.getElementById('posY')

window.addEventListener("mousemove", event => {
    posX.innerHTML = event.screenX
    posY.innerHTML = event.screenY
})


const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const text = document.querySelector('.text')
const clear = document.querySelector('.clear')

let a = 0
plus.addEventListener('click',() => {
a++
if (a > 0){
    text.innerText = a
    text.style.color = 'green'
}
})
minus.addEventListener('click', () => {
    a--
    if (a >= 0){
        text.innerText = a
        text.style.color = 'red'
    }
})
clear.addEventListener('click', () => {
    a = 0
    text.innerText = a
    text.style.color = 'black'
})





