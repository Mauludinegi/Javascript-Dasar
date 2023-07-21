const person = {
    name : "Gie",
    
    sayHello : (name) => console.log(`hello ${name}`)
}

// mengganti value property
person.sayHello = (name) => console.log(`Hi ${name}`);
person.sayHello("Mauludin");


