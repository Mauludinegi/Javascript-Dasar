// In Operator digunakan untuk mengece apakah sebuah property ada di dalam object atau tidak

const person = {
    firstname: "gie",
    lastname: "Mauludin"
}

console.log(`this people ${person.firstname} is ${"firstname" in person}`);

const number = new Array(1,2,3,4,5,undefined,null, "", true);
console.log(8 in number);