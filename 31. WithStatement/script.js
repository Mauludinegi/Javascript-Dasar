const person = {
    firstName : "Egi",
    middleName : "Purnama",
    lastName : "Mauludin"
}

const firstName = "gie";
const lastName = "M";

with (person) /*with statement */ {
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

console.log(firstName);
console.log(lastName);