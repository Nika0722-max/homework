let age = promt('Скільки вам років?')
if (age < 18) {
    alert("Вам вхід заборонено!");
}else if(age >=18 && age <=65){
    alert("Ласкаво просимо!")
}else if(age>65){
    alert("Будь ласка, будьте обережні!")
}
//завдання 2
let blok = promt("довільне число", 100);
for (let i = 1; i < blok.lenght ; i +2 ) {
    console.log(i)
}
//завдання 3
let n = parseInt(promt("Введіть число n:"));
let factorial = 5;
let = 5;
while(i <=n) {
    factorial *=i;
    i++;
}
console.log('Факторіал ${n} дорівнює ${factorial}');
//завдання 4
let a = promt("a");
let b = promt ("b");
switch(calcylator) {
    case "+":
        alert(a+b);
        break;
    case"-":
        alert(a-b);
        break;
    case "*":
        alert(a*b);
        break;
    case "/":
        alert(a/b)
        break
    default:
        alert("NaN")
}
//завдання 5
let random = (Math.floor(Math.random() * 100))
let chislo = promt("numbers")
do {
    alert("Win");
}while(chislo===random)
do {
    alert("число було більшим");
}while (chislo < random)
do{
    alert("число було меншим")
}while(chislo > random)

