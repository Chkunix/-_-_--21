let a = parseFloat(prompt("Введіть перше число (A):"));
let b = parseFloat(prompt("Введіть друге число (B):"));
let c = parseFloat(prompt("Введіть третє число (C):"));

console.log(a)
console.log("Середнє арифметичне йоу")
let average = (a + b + c) / 3;
console.log(`${average.toFixed(2)}`);

console.log("Операції над числом A");
console.log(`${Math.abs(a)}`);
console.log(`${Math.ceil(a)}`);
console.log(`${Math.floor(a)}`);
console.log(`${Math.paw(a, 2)}`);

let divisor = 5;
[a, b, c].forEach((num, index) => {
    if (num % divisor === 0) {
        console.log(`Число ${num}, Ділиться ${divisor}`);
    } else {
        console.log(`"Число" ${num} "Не ділиться" ${divisor}. "Залишок" ${num % divisor}`);
    }
});

if (a + b > c && a + c > b && b + c > a) {
    console.log(`Трикутник зі сторонами ${a}, ${b}, ${c} Може існувати.`);
} else {
    console.log(`Трикутник зі сторонами ${a}, ${b}, ${c} Не існує.`);
}
