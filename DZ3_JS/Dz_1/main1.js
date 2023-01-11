let numA = Number(prompt('Введите первое число:'))
let numB = Number(prompt('Введите второе число:'))

const calc = (a, b) => {
    if (a > b) {
        alert(a)
    } else if (a < b) {
        alert(b)
    } else if (a === b) {
        alert('Числа должны быть разными!!!')
    } else {
        alert('ERROR')
    }

}
calc (numA, numB)