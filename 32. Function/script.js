function sayHello() {
    console.log("Hello World");
}

for (let index = 0; index < 10; index++) {
    sayHello();
}

const greet = (hi) => `hi ${hi}`;
console.log(greet(true));

// function anonymous
const hello = function (name) {
    console.log("helo " + name);
}
hello("gajah");

const kelulusan = (nilai, absen) => {
    if(nilai >= 75 && absen >= 75) {
        return "Selamat anda lulus";
    } else {
        return "Anda harus mengulang";
    }
}

console.log(kelulusan(75, 75));


const multiply = (a, b) => a * b;
const value = multiply(15, 5);
console.log(value);


console.log();

const array = [1,2,3,4,5,6,42];
function isContains(array, searchValue) {
    for (const [index, iterator]  of array.entries()) {
        if (iterator == searchValue) {
            console.log(`value ${searchValue} ditemukan di index ${index}`);
            return true;
        }
    }
    console.log("value tidak ditemukan");
    return false;
}


isContains(array, 43);

console.log();
console.log("Ini adalah bagian optioanl parameter");
//optional parameter
const person = (firstName, middleName, lastName) => {
    console.log(`${firstName} ${middleName} ${lastName}`);
}

person("gajah");
person("gajah", "Asia");
person("gajah", "Asia", "Tenggara\n\n");


//Default Paramater
console.log("Ini adalah bagian Default Parameter");

const register = (name, gender = "unknown") => {
    console.log(name, gender);
}

register("gajah", "male");
register("gajah", null);
register("gajah");
console.log("\n");

// Rest Parameter
function sum(...params) {
    let total = 0;
    for (const iterator of params) {
        total += iterator
    }
    return total;
}

console.log(sum(1,2,3,4,5));


//Spread Syntax
const angka = new Array(1,2,3,4,5);
console.log(sum(...angka));


// Arguments Object
console.log("\nIni adalah arguments Object");
function oldSum() {
    let total = 0;
    for (const item of arguments) {
        total += item;
    }
    return total;
}

console.log(oldSum(1,2,3,4,5));
console.log();

// menyimpan function ke variable
let say = sayHello;
say();

//function di parameter
const hi = (name) => console.log(`Hi ${name}`);
function giveMeName(callback) {
    callback("Gie");
}

let hai = hi;
giveMeName(hai);


let giftName = (callback) => {
    callback(`Gie`);
}

// anonymous function di paramater
giftName(function (name) {
    console.log(`Hi ${name}`);
});


//inner function
let outer = () => {
    let inner = () => {
        console.log("Ini adalah isi dari inner function");
    }
    inner();
}

outer();

// arrow function
let halo = name => console.log(`halo ${name}`);
halo("gie");

// arrow function sebagai parameter
halo = callback => {
    callback("gie");
}

halo(name => console.log(`halo ${name}`));