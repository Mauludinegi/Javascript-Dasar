// Function generator *
// sederhana
function* createNames() {
    yield "Gie";
    yield "Mauludin";
}

console.log(createNames());

const names = createNames();
// console.log(names[0]); // tidak bisa diakses menggunakan index

// hanya bisa di iterasi
for (const iterator of names) {
    console.log(iterator);
}


// Function Generator Kompleks
// lazy
function* makeOdd(value) {
    for(let i = value; i >= 1; i--) {
        if(i % 2 != 0) {
            console.log(`yield ${i}`);
            yield i;
        }
    }
}

// eager
function makeOddArray(value) {
    const result = [];
    for(let i = 0; i <= value; i++) {
        if (i % 2 ===1) {
            console.log(`yield ${i}`);
            result.push(i);
        }
    }
    return result;
}

let numbers = makeOdd(100);
// for (const iterator of numbers) {
//     console.log(iterator);
// }

console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);