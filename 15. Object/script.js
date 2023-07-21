const person = {}; // Object kosong

person.name = "Egi Purnama M";
person.age = 19;
person.status = "Mahasiswa";
person["address"] = "Sumedang";
delete person["address"];
console.table(person);

const animals = {
    cat: {
        "name": "Meowsy",
        "species": "cat",
        "foods": {
            "likes": ["tuna", "catnip"],
            "dislikes": ["ham", "zucchini"]
        }
    }
}

console.table(animals);
console.log(animals["cat"]["foods"]["likes"][0]);