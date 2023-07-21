// global scope
let globalScope = "Ini adalah global scope";
function scope() {
    // local scope
    let localScope = "Ini adalah local scope";
    console.log(globalScope);
    console.log(localScope);
}
// console.log(localScope); // Error
scope();


//nested function scope
function nested() {
    let nestedFirstVariable = "Variable Nested Pertama";

    function secondNested() {
        let nestedSecondVariable = "Variable Nested Kedua";
        console.log(nestedFirstVariable);
    }

    secondNested();
    // console.log(nestedSecondVariable); // Error
}

nested();