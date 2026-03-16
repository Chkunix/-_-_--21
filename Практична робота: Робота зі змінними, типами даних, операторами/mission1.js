let num = 10;
let float = 5.5;
let text = "Hello";
let bool = true;

console.log("Початкові значення:");
console.log(num, typeof num);
console.log(float, typeof float);
console.log(text, typeof text);
console.log(bool, typeof bool);

num = "20";
float = "7.3";
text = 100;
bool = 0;

console.log("Після змін")
console.log(num, typeof num);
console.log(float, typeof float);
console.log(text, typeof text);
console.log(bool, typeof bool);

let concat = num + text;
let boolToNum = Number(true);
let strToNum = Number("50");
let numToStr = String(25);

console.log("джонсон")
console.log(concat, typeof concat);
console.log(boolToNum, typeof boolToNum);
console.log(strToNum, typeof strToNum);
console.log(numToStr, typeof numToStr);

let obj = {
  age: 67,
  height: 1.75,
  name: "Dazzle",
  isStudent: true
};

console.log("фінал")
console.log(JSON.stringify(obj, null, 2));
