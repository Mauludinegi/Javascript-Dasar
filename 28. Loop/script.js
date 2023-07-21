// For Loop
/*
for(init statement; kondisi; post statement) {
    block perulangan
}
*/

for (let index = 0; index <= 10; index++) {
    console.log(index);
}
console.log();

// While Loop
let counter = 1;
while (counter < 10 ){
    console.log(counter);
    counter++;
}

// Do While Loop
let i = 0;
do {
    console.log(i);
} while (i <0);


const person = {
    firstName : "Egi",
    middleName : "Purnama",
    lastName : "Mauludin"
}

//for in umumnya digunakan untuk object
for (const property in person) {
    if (Object.hasOwnProperty.call(person, property)) {
        const element = person[property];
        console.log(element);
    }
}

//for in untuk array
const animals = ["Tiger", "Lion", "Wolf"];
for (const index in animals) {
    if (Object.hasOwnProperty.call(animals, index)) {
        const element = animals[index];
        console.log(`${index} : ${element}`);
    }
}

// for of umumnya digunakan untuk iterasi array
for (const value of animals) {
    console.log(value);
}

