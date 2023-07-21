for (let i = 0; i < 50; i++) {
    if (i % 2 == 0) {
        continue;
    } 
    if (i == 7) {
        break;
    }
    console.log(i);
}