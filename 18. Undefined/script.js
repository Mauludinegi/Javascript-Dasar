// let name = prompt("Masukan Nama");
// if (name == undefined) {
//     alert("Data Undefined")
// } else {
//     alert("Defined")
// }


const array = new Array("gajah", 1, 2, 3);
console.log(array[7]);


const person = {};

person.name = "siapa";
person.age = 19;
if(person.name && person.age) {
    console.log("orang ada");
} else {
    console.log("tidak ada");
}