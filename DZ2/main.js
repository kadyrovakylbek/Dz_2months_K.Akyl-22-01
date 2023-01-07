let arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {
    let num = String(arr[i]);
    let usl = num[0];
    if (usl == 1 || usl == 2 || usl == 5) {
        console.log(num);
    }
}

