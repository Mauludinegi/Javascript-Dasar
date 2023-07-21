let number = 1 + '1';  // Harus di konversikan terlebih dahulu
console.log(number); 

let a = 2;
let b = "2";
b = parseFloat(b);
let sum = a + b;
console.log(sum);


let bilangan = 2.00 + 1.7;
bilangan = Math.ceil(bilangan);
console.log(bilangan);


console.log(parseInt("1.salah"));
console.log(parseInt("salah")); //mentolerir adanya kesalahan parseInt atau parseFloat
console.log(Number("1.1 salah")); // Number tidak mentolerir satu kesalahanpun

let value1 = Number("salah");
let value2 = 100;
let sumValue = value1 + value2;
console.log(sumValue);
console.log(isNaN(sumValue));