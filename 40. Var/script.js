// Var sudah tidak direkomendasikan lagi, karena datanya bisa saja tidak terprediksi
//global scope
let i = 20;
for(let i = 0; i < 10; i++) {
    //local scope
    console.log(`local ${i}`);
}

console.log(`Global ${i}`);
console.log();

var j = 0;
for(var j = 0; j < 10; j++) {
    console.log(`local ${j}`);
}

console.log(`Global ${j}`);