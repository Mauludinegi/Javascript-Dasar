// Sebelum menggunakan recursiveFunction
function factorial(value) {
    let result = 1;
    for(let i = 1; i <= value; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));

//menggunakan recursiveFunction
let factorialRecursive = (value) => {
    if(value === 1) {
        return 1;
    } else {
        return value * factorialRecursive(value - 1);
    }
}

console.log(factorialRecursive(5));