 
 var myName = "Вероніка";  
let myAge = 16; 
const favoriteQuote = "Життя - це те, що з тобою відбувається, поки ти будуєш плани.";

console.log("Ім'я:", myName);
console.log("Вік:", myAge);
console.log("Улюблена цитата:", favoriteQuote);


let numberValue = 42;  
let stringValue = "Hello, world!";  
let booleanValue = true;  
let undefinedValue;  
let nullValue = null;  
let symbolValue = Symbol("Опис символу");  
let bigIntValue = 1234567890123456789012345678901234567890;  
 console.log("numberValue:", numberValue, typeof numberValue);
console.log("stringValue:", stringValue, typeof stringValue);
console.log("booleanValue:", booleanValue, typeof booleanValue);
console.log("undefinedValue:", undefinedValue, typeof undefinedValue);
console.log("nullValue:", nullValue, typeof nullValue);
console.log("symbolValue:", symbolValue, typeof symbolValue);
console.log("bigIntValue:", bigIntValue, typeof bigIntValue);

 
 let num1 = 15;
let num2 = 4;

console.log("Сума:", num1 + num2);
console.log("Різниця:", num1 - num2);
console.log("Добуток:", num1 * num2);
console.log("Частка:", num1 / num2);
console.log("Остача від ділення:", num1 % num2);
console.log("Піднесення до степеня:", num1 ** num2);

 
 let a = 10;
a += 5;
a *= 2;
console.log("Остаточне значення a:", a);

 let isGreaterThan25 = a > 25;
console.log("Чи a більше за 25?", isGreaterThan25);

 
let isAdult = true;
let hasPermission = false;

let hasAccess = isAdult || hasPermission;

let accessMessage = hasAccess ? "Доступ дозволено" : "Доступ заборонено";
console.log(accessMessage);

console.log("Число + рядок:", 10 + "5");  

console.log("5" == 5); 
console.log("5" === 5);  

 
 
function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Помилка: ділення на нуль";
        default:
            return "Невідома операція";
    }
}

console.log("5 + 3 =", calculator(5, 3, "+"));
console.log("10 - 4 =", calculator(10, 4, "-"));
console.log("6 * 7 =", calculator(6, 7, "*"));
console.log("20 / 4 =", calculator(20, 4, "/"));
console.log("10 / 0 =", calculator(10, 0, "/"));
console.log("3 ^ 3 =", calculator(3, 3, "^"));