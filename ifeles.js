//ifelse
let a = 190;
let b = 120;

if (a > b) {
  console.log("Maka nilai a lebih besar dari b");
} else {
  if (a < b) {
    console.log("Maka nilai a lebih kecil dari b");
  } else {
    console.log("nilai a sama dengan nilai b");
  }
}

//function
function kali(a, b) {
  return a * b;
}
let hasil = kali(10, 100);
console.log("Hasil Perkaliannya adalah =  " + hasil);

//switich-case
let angka = 90;

switch (angka) {
  case 100:
    console.log("Angka tersebut adalah 100");
    break;
  case 90:
    console.log("angkat tersebut adalah 90");
    break;
  default:
    console.log("tidak ada angka yang dimasukkan");
}

//for
for (let p = 0; p < 19; p++) {
  console.log("Kamar di " + (p + 1));
}

//while-do
let jenis = 0;
while (jenis < 5) {
  console.log("anda memasuki dikamar " + (jenis + 1));
  jenis++;
}

let ruangan = 0;
do {
  console.log("anda juga telah memasuki dikamar " + (ruangan + 1));
  ruangan++;
} while (ruangan < 5);
