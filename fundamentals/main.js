// let tahunMerdeka = 1945;
// let tahunLamaMerdeka = 2023;
// console.log(tahunLamaMerdeka - tahunMerdeka);

// ==============================================================

// let score = 1;
// console.log(score);

// ==============================================================

// const merdeka = 1945;

// let ayam = true;
// const isLogin = false;
// console.log(isLogin);

// ==============================================================

// let a = 'I can not "sleep"';
// console.log(a);

// ==============================================================

// const nilaiUjian = 90;

// if (nilaiUjian < 50) {
//   console.log("E");
// } else if (nilaiUjian < 60) {
//   console.log("D");
// } else if (nilaiUjian < 70) {
//   console.log("C");
// } else if (nilaiUjian < 80) {
//   console.log("B");
// } else if (nilaiUjian < 100) {
//   console.log("A");
// }

// ==============================================================

// const thisDay = prompt("Isikan hari!").toLowerCase();

// if (thisDay === "senin") {
//   console.log("Kerja woy!!");
// } else if (thisDay === "sabtu") {
//   console.log("Yeayy libur");
// } else {
//   console.log("Biasa aja");
// }

// ==============================================================

// const password = prompt("Isikan Password!");

// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Password valid");
//   } else {
//     console.log("Password tidak boleh ada spasi!");
//   }
// } else {
//   console.log("Password minimal 6 karakter");
// }

// const gender = "male";
// const age = 11;

// if (gender === "male" && age >= 19) {
//   console.log("Legal!");
// } else {
//   console.log("Masih bocil");
// }

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("Password Valid");
// } else {
//   console.log("Buat Ulang!");
// }

// const role = prompt("Isikan Role!").toLowerCase();

// if (role === "admin" || role === "spv") {
//   console.log("Akses Penuh");
// } else {
//   console.log("Akses Ditolak");
// }

// if (role !== "admin") {
//   console.log("Akses Ditolak");
// } else {
//   console.log("Akses Penuh");
// }

// ==============================================================

// const balonku = prompt("Isikan warna").toLowerCase();
// switch (balonku) {
//   case "merah":
//     console.log("warna merah");
//     break;
//   case "hijau":
//     console.log("Doorrrr!!!");
//   default:
//     console.log("Bukan balon saya");
// }

// ==============================================================

// let hewan = ['Kambing', 'Ayam', 'Sapi', 'Anjing'];

// hewan[1] = 3;

// console.log(hewan);
// console.log(hewan[3]);
// console.log(hewan.length);
// console.log(hewan[1]);

// ==============================================================

// let barbel = [];

// // push - pop

// barbel.push(20); //nilai pertama yang diletakkan
// barbel.push(15, 10, 5, 2.5, 1);

// barbel.pop() //mengambil nilai terakhir yang diletakkan

// console.log(barbel);

// ==============================================================

// let barbel = [10, 5, 2.5, 1];

// // unshift - shift

// barbel.unshift(20, 15); //menambah nilai ke paling awal array
// barbel.shift(); //mengambil nilai paling awal yang diletakkan

// console.log(barbel);

// ==============================================================

// method yang sering digunakan pada array
// concat - include - indexOf - join - reverse - slice - splice - sort

// // concat --> merge array
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let array3 = array1.concat(array2);
// let array4 = array2.concat(array1);

// console.log(array3);
// console.log(array4);

// // include --> output boolean
// const angka = [1, 2, 3, 4, 5];

// console.log(angka.includes(2)); // true
// console.log(angka.includes(12)); // false

// // sort --> pengurutan

// const namaHewan = ['Kucing', 'Sapi', 'Ayam', 'Bebek'];

// namaHewan.sort(); // --> Mengurutkan sesuai alphabet
// namaHewan.reverse(); // --> Mereverse
// console.log(namaHewan);

// // splice --> menambah bisa juga menggantikan

// const months = ['Jan', 'March', 'June'];

// months.splice(1, 0, 'Feb'); // --> Menambahkan Feb pada index 1 dan menggeser March menjadi index 2
// months.splice(0, 2, 'Des'); // --> Mengganti index 0 menjadi Desember, 2 merupakan jumlah index yang akan dihapus

// console.log(months);

// // slice --> Menghapus elemen

// const namaKota = ['Batang', 'Pekalongan', 'Cirebon', 'Bandung', 'Jogja', 'Cilacap'];

// console.log(namaKota.slice(1)); // Menghilangkan nilai pertama
// console.log(namaKota.slice(2, -1)); // Menghilangkan 2 nilai pertama dan 1 nilai dari belakang
// console.log(namaKota.slice(2, 4)); // Memunculkan nilai dari indeks 2 sampai indeks 3

// // join --> Menambahkan karakter dalam array

// const iniKata = ["Hai", "Aku", "Saleh"];

// console.log(iniKata.join(''));
// console.log(iniKata.join(' ')); // Menambahkan spasi
// console.log(iniKata.join('-')); // Menambahkan strip

// ==============================================================

// const groupA = ["Dadang", "Septi", "Wahyu"];
// groupA.push("Riki"); // Manipulasi nilai di dalam array
// console.log(groupA);

// ==============================================================

// // multidimensional = nested array
// const board = [
//   [null, null, "o"],
//   ["x", "o", null],
//   ["o", "x", null],
// ];

// console.log(board);
