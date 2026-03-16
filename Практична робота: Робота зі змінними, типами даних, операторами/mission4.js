const name = prompt("Як вас звати?");
const birthYear = parseInt(prompt("Введіть ваш рік народження:"));
const city = prompt("У якому місті ви живете?");

const currentYear = 2026;
const age = currentYear - birthYear;

let category;
if (age < 13) {
    category = "дитина";
} else if (age >= 13 && age < 18) {
    category = "підліток";
} else if (age >= 18 && age < 65) {
    category = "дорослий";
} else {
    category = "літня людина";
}

const capitalOfUkraine = "Київ";
let cityMessage;

if (city.trim().toLowerCase() === capitalOfUkraine.toLowerCase()) {
    cityMessage = `Місто ${city} — це столиця України!`;
} else {
    cityMessage = `Місто ${city} — гарне місце, але це не столиця України.`;
}

console.log(`Привіт, ${name}!`);
console.log(`Вам ${age} р., ваша вікова група: ${category}.`);
console.log(cityMessage);
