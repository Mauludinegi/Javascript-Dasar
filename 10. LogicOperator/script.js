const nilaiUjian = 70;
const absensi = 75;

const lulusUjian = nilaiUjian >= 75;
const lulusAbsensi = absensi >= 75;

const lulus = lulusUjian && lulusAbsensi; // Operator logika ada 3 yaitu dan(&&), atau(||) dan negasi(!)
lulus ? document.writeln("<p>Lulus</p>") : document.writeln("<p>Tidak Lulus</p>")
console.warn();