// Завдання 1: Оголошення змінних

// 1. Оголошення змінних
var myName = "Вероніка"; // Змінна для зберігання імені
let myAge = 16; // Змінна для зберігання віку
const favoriteQuote = "Життя - це те, що з тобою відбувається, поки ти будуєш плани.";

// 2. Вивід значень у консоль
console.log("Ім'я:", myName);
console.log("Вік:", myAge);
console.log("Улюблена цитата:", favoriteQuote);

// Завдання 2: Робота з типами даних

// 1. Створення змінних різних типів
let numberValue = 42; // Number
let stringValue = "Hello, world!"; // String
let booleanValue = true; // Boolean
let undefinedValue; // Undefined
let nullValue = null; // Null
let symbolValue = Symbol("Опис символу"); // Symbol
let bigIntValue = 1234567890123456789012345678901234567890; // BigInt

// 2. Перевірка типів
console.log("numberValue:", numberValue, typeof numberValue);
console.log("stringValue:", stringValue, typeof stringValue);
console.log("booleanValue:", booleanValue, typeof booleanValue);
console.log("undefinedValue:", undefinedValue, typeof undefinedValue);
console.log("nullValue:", nullValue, typeof nullValue);
console.log("symbolValue:", symbolValue, typeof symbolValue);
console.log("bigIntValue:", bigIntValue, typeof bigIntValue);

// Завдання 3: Арифметичні оператори

// 1. Обчислення значень
let num1 = 15;
let num2 = 4;

console.log("Сума:", num1 + num2);
console.log("Різниця:", num1 - num2);
console.log("Добуток:", num1 * num2);
console.log("Частка:", num1 / num2);
console.log("Остача від ділення:", num1 % num2);
console.log("Піднесення до степеня:", num1 ** num2);

// Завдання 4: Оператори присвоєння та порівняння

// 1. Оновлення значення
let a = 10;
a += 5;
a *= 2;
console.log("Остаточне значення a:", a);

// 2. Порівняння
let isGreaterThan25 = a > 25;
console.log("Чи a більше за 25?", isGreaterThan25);

// Завдання 5: Логічні оператори та тернарний оператор

// 1. Логічні умови
let isAdult = true;
let hasPermission = false;

// 2. Перевірка умов
let hasAccess = isAdult || hasPermission;

// 3. Використання тернарного оператора
let accessMessage = hasAccess ? "Доступ дозволено" : "Доступ заборонено";
console.log(accessMessage);

// Завдання 6: Приведення типів

// 1. Приклади автоматичного приведення
console.log("Число + рядок:", 10 + "5"); // "105"

// 2. Різниця між == та ===
console.log("5" == 5); // true (неявне приведення типів)
console.log("5" === 5); // false (різні типи)

// Завдання 7: Створення простого калькулятора

// 1. Функція калькулятора
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

// 3. Тестування функції
console.log("5 + 3 =", calculator(5, 3, "+"));
console.log("10 - 4 =", calculator(10, 4, "-"));
console.log("6 * 7 =", calculator(6, 7, "*"));
console.log("20 / 4 =", calculator(20, 4, "/"));
console.log("10 / 0 =", calculator(10, 0, "/"));
console.log("3 ^ 3 =", calculator(3, 3, "^"));