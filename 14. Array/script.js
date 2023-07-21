const animals = Array("gajah", "lumba-lumba", "Harimau"); //array dengan isi
const array = Array();
const number = [1, 2, 3, 4, 5];
const numberNull = [];
console.log(animals[1]);

// Menambah data
// bisa string, number, boolean atau apapun
const names = [];
names.push("Egi");
names.push("Purnama", "Mauludin");
console.table(names);


//array.length untuk mendapatkan panjang array
console.log(names.length);

//mengganti values array
names[3] = "Mauludin";
console.log(names[2]); // untuk mendapatkan data array[index] 

// Menghapus data di array
names.pop();
console.log(names);

//menghapus berdasarkan index
delete names[1];
console.table(names);
console.log(names);