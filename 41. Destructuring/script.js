{
    const names = ["Gie", "Mauludin", "Purnama", "Juuya", "Ito", "Takuma"];

    // Destructuring array
    const [firstName, middleName, lastName, ...others] = names;

    console.log(firstName);
    console.log(middleName);
    console.log(lastName);

    for (const iterator of others) {
        console.log(iterator);
    }
}
// destructuring object
const person = {
    firstName: "Gie",
    lastName: "Mauludin",
    address: {
        street: "jln Not Found",
        city: "NotFound",
        country: "Indonesia"
    },
    hobby: "Tidur",
    channel: "NotFound"
}
{
const { firstName, lastName, address: { street, city, country }, ...others } = person;
console.log(firstName);
console.log(lastName);
console.log(street);
console.log(city);
console.log(country);
console.log(others);
console.log();
}
// Destructuring Function Parameter

function displayPerson({ firstName, lastName, address: { street, city, country } }) {
    console.log(firstName);
    console.log(lastName);
    console.log(street);
}

displayPerson(person);

// Destructuring Function Parameter array
let array = new Array(1, 2);
function sum([first, second]) {
    return first + second;
}

console.log(sum(array));

// Default Value Destructuring Array
{
    const names = ["Son", "Heung"];
    const [firstName, middleName, lastName = "Min"] = names;

    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

// Default Value Destructuring Object
{
    const person = {
        firstName: "Kaouru",
        lastName: "Mitoma"
    }

    const { firstName, middleName = " ", lastName } = person;
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

// Destructuring menggunakan nama variable lain
const {
    firstName: namaDepan,
    middleName: namaTengah = "Purnama",
    lastName: namaBelakang
} = person;

console.log(namaDepan);
console.log(namaTengah);
console.log(namaBelakang);