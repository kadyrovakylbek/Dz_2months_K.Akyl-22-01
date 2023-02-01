class Svefotor {
    constructor() {
        this.red = document.querySelector('.red')
        this.yellow = document.querySelector('.yellow')
        this.green = document.querySelector('.green')
    }

    changeColor(color) {
        console.log(color)
        this.red.style.backgroundColor = 'white'
        this.yellow.style.backgroundColor = 'white'
        this.green.style.backgroundColor = 'white'

        if (color === 'red') {
            this.red.style.backgroundColor = 'red'
        }else if (color === 'yellow') {
            this.yellow.style.backgroundColor = 'yellow'
        }else if (color === 'green') {
            this.yellow.style.backgroundColor = 'green'}
    }
}
let a = new Svefotor()
a.changeColor((prompt('Введите цвет светофора(red, yellow, green):')))
