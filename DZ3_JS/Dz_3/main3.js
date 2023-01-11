let numA = Number(prompt('Введите первое число:'))
let numB = Number(prompt('Введите второе число:'))
let symbol = Number(prompt('Введите значение сложение - (1), вычетание - (2), умножение - (3), деление - (4)'))

const calc = (a, b,) => {
    if (symbol === 1) {
        alert(a + b)
    } else if (symbol === 2) {
        alert(a - b)
    } else if (symbol === 3) {
        alert(a * b)
    } else if (symbol === 4) {
        alert(a / b)
    } else {
        alert('Error')
    }
}
calc(numA, numB, symbol)