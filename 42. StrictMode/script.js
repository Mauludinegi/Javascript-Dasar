'use strict';
const person = {
    name: "Mitoma"
}

with (person) { // Error
    console.log(name);
}

