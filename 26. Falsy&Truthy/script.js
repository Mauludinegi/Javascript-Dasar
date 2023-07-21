let number = 0; // falsy

if (number) {
    console.log(1);
} else {
    console.log(0);
}

let string = () => console.log("hello");;
console.log(typeof string);
if(string) {
    console.log(1);
} else {
    console.log(0);
}