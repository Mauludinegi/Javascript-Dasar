const person = {
    firstName : "Gie",
    lastName : "Mauludin",

    // Getter digunakan untuk mengakses data
    get fullName() { 
        return `${this.firstName} ${this.lastName}`
    },

    set fullName(name) {
        const array = name.split(" ");
        this.firstName = array[0];
        this.lastName = array[1];
    }
} 

person.fullName = "Mauludin Gie";
console.table(person);

person.fullName = "Gie Purnama";
console.table(person);

person.fullName = "Purnama Gie";
console.table(person);

console.log(person.fullName);