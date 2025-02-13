let integer = 10;             
let float = 3.14;             
let str = " love";    
let bool = true;             

console.log( typeof integer);   
console.log(typeof float);      
console.log( typeof str);          
console.log( typeof bool);         

integer = 20;
float = 5.67;
str = "love";
bool = false;

 console.log(typeof integer);   
console.log(typeof float);       
console.log(typeof str);           
console.log(typeof bool);         

let concatResult = integer + str;   
let boolToNumber = Number(bool);  
let floatToString = String(float);  
 console.log(concatResult);   
console.log(boolToNumber);   
console.log(floatToString); 

let obj = {
    integer: integer,
    float: float,
    str: str,
    bool: bool,
    arr: [1, 2, 3],  
    obj: { key: "value" }   
};

console.log( );
console.log(JSON.stringify(obj, null, 2));
//  завдання 2
let num1 = 10;
let num2 = 20;
let num3 = 30;

let average = (num1 + num2 + num3) / 3;
console.log( average);

let absNum1 = Math.abs(num1);  
let ceilNum2 = Math.ceil(num2); 
let floorNum3 = Math.floor(num3);  
let powNum1 = Math.pow(num1, 2);  

console.log(absNum1);
console.log(ceilNum2);
console.log(floorNum3);
console.log(powNum1);

let divisor = 5;
console.log(num1 % divisor === 0);
console.log(num2 % divisor === 0);
console.log(num3 % divisor === 0);

let side1 = AD;
let side2 = AS;
let side3 = SD;

if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    console.log("Трикутник може існувати.");
} else {
    console.log("Трикутник не може існувати.");
}
// ЗАВДАННЯ 3
let number1 = 7;
let number2 = 6;
let number3 = 8;
let max = Math.max(num1, num2, num3);   
let min = Math.min(num1, num2, num3);   

console.log($max);
console.log($min);

let isEven = (num1 % 2 === 0)  (num2 % 2 === 0)  (num3 % 2 === 0);
console.log(isEven);

let conditionResult = (num1 > num2) && (num2 < num3);
console.log(conditionResult);

  //завдання 4
let name = Ніка;
let birthYear = 2008;
let city = Луцьк;

let currentYear = new Date().getFullYear();   
let age = currentYear - birthYear;   
console.log("Привіт,Ніка,! Мені 16 років");

let ageGroup;

if (age >= 0 && age <= 12) {
    ageGroup = "дитина";
} else if (age >= 13 && age <= 18) {
    ageGroup = "підліток";
} else if (age >= 19 && age <= 60) {
    ageGroup = "дорослий";
} else if (age > 60) {
    ageGroup = "літня людина";
} else {
    ageGroup = "невідомий вік";
}

console.log($ageGroup);

 let capital = "Київ"; 

if (city === capital) {
    console.log("Луцьк є столицею");
} else {
    console.log("Луцьк не є столицею");
}
//Контрольні запитання
//1.Змінна, оголошена за допомогою var, доступна в межах функції, де вона була оголошена, або в глобальній області видимості, якщо оголошена поза функцією.Змінна, оголошена за допомогою let, доступна тільки в межах блоку, де вона була оголошена.Змінні, оголошені через const, мають блочну область видимості.
//2.Додавання рядків, доступ до окремих символів, пошук підрядків
//3.== виконує автоматичне приведення типів, що може призвести до неочікуваних результатів.=== порівнює і значення, і тип, і тому є більш надійним і передбачуваним у порівнянні.
//4.&& (логічне I / AND) Повертає true, якщо всі операнди істинні.
// // (логічне АБО / OR)Повертає true, якщо хоча б один операнд істинний.
//! (логічне НЕ / NOT)Інвертує значення операнда: якщо операнд істинний, повертається false, якщо хибний повертається true.
