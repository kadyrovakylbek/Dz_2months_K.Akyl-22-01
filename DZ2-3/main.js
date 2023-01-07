let tlight = prompt ('Цвет светофора', 'red','yellow','green')

if (tlight === 'red') {
    alert('Стой')
} else if (tlight === 'yellow') {
    alert('Приготовиться')
} else if (tlight === 'green') {
    alert('Проезд разрешен')
} else {
    alert('Error input colors(red,yellow,green)')
}