Loopi:
for (let i = 1; i <= 10; i++) {
    loopj:
    for (let j = 1; j < 20; j++) {
        if (j > 10) {
            continue Loopi;
        }
        console.log(`${i} * ${j} = ` + i * j);
    }
    
}