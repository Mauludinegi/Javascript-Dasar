const createFullName = (firstName, middleName, lastName) => {
    const fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}

console.log(createFullName("Son", "Heung", "Min"));

function sum(...number) {
    debugger;
    let total = 0;
    for (const iterator of number) {
        total += iterator;
    }
    return total;
}

console.log(sum(1, 1, 1, 1, 1));