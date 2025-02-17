function greet(Nika) {
    console.log("Привіт,Nika!")
}
function greet(Annja){
    console.log("Привіт,Annja!")
}
const greet = function(Vika) {
    console.log("Привіт, Vika!")
}
function sum(a,b) {
    return a+b
}
console.log(sum(9, 5));
function sum(a,b) {
    return a+b
}
console.log(sum(8,7));
const squareArry = (arr)=> arr.map(num => num*num);
console.log(squareArry([1,2,3,4,5]));
const calculate = (num1, num2, operator) =>{
    if(operator==='+') {
        return num1 + num2;
    }else if( operator==='-'){
        return num1 - num2;
    }else if (operator==='*'){
        return num1 * num2;
    }else if(operator=='/') {
        if (num2===0) {
            return "Ділення на 0 неможливе";
        }else {
        return num1/num2;
        }
    }  
};

console.log(calculate(11,5,'+'));
console.log(calculate(6,7,'-'));
console.log(calculate(36,6,'/'));
console.log(calculate(2,4,'*'));


const filterLongWords = (words, length) => {
    return words.filter(word => word.length > length);
  };
  
  console.log(filterLongWords(["яблуко", "банан", "ананас", "кіт", "сонце"], 5)); 
  
 