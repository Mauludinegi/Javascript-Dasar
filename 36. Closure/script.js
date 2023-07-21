// membuat sebuah local scope keluar dari scopenya

function createAdder(value) {
    const owner = "Gie";
    function add(param) {
        console.log(owner);
        return value + param;
    }
    return add;
}

const addTwo = createAdder(2);

// breakdown function createAdder
// function addTwo(param) {
//     console.log("Gie");
//     return 2 + param
// }
console.log(addTwo(2));
console.log(addTwo(3));
console.log(addTwo(4));