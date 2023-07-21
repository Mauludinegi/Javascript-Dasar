// Operator Logika Non Boolean prioritas dari kiri ke kanan
// akan mengambil nilai pertama yang true
// jika yang kiri falsy maka akan diambil yang kanan
//falsy
console.info("Hello" || "");

console.log("" || null);

const person = {
    firstName: "Egi",
    lastName: "Purnama"
}

const name = person?.firstName || person.lastName;

console.log(name);

// truthy
// kebalikan dari falsy dimana operator ini akan mengambil nilai pertama yang falsy
// jika tidak ada nilai yang falsy maka akan mengambil nilai yang paling kanan
console.log("\n");
console.log("hello" && '');
console.log(undefined && null);
console.log(person?.firstName && person?.lastName);