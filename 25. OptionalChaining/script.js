const person = {
    name: "Egi",
    address: {
        country: "Atlantik"
    },
    array: [1,2,3,4, {
        age: 19,
        status: "Mahasiswa",
        "tempat asal": "Nort atlantik"
    }]
};

const country = person.address?.country;
console.log(country);
console.log(person.array[1]);
console.log(person.array[4]?.["tempat"]);
console.log("success");

if(person?.address?.country) {
    console.log(`say hello ${person.address.country}`);
}

