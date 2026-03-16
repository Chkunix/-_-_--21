const a = 15;
const b = 10;
const c = 22;

console.log(`Введені числа: ${a}, ${b}, ${c}`);

const maxVal = Math.max(a, b, c);
const minVal = Math.min(a, b, c);

console.log(maxVal);
console.log(minVal);

const isAnyEven = (a % 2 === 0) || (b % 2 === 0) || (c % 2 === 0);
console.log(isAnyEven);

const complexCondition = (a > b && b < c);
console.log(complexCondition);

function isPrime(num) {
    if (num <= 1) return false;
    for (let i= 2; i < num; i++) {
        if (num % i===0)  return false;
    } 
    return true
}

console.log(`Чи є число ${a} простим?:`, isPrime(a));