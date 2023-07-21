// by default window
console.log(this);

function sample() {
    console.log(this);
}

sample();

function outer() {
    function inner() {
        console.log(this);
    }
    inner();
}

outer();

const person = {
    name: "Gie",
    sayHello: function (name) {
        console.log(`Hello ${name} my name is ${this.name}`);
    }
}
person.sayHello("Mauludin");
person.sayHello("Purnama");