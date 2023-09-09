// syntax
// function namaFungsi() {
// lakukan proses
// }

// function lemparDadu() {
//   console.log(Math.floor(Math.random() * 6) + 1);
// }

// lemparDadu();

// ==============================================================

// function greet(name) { // name merupakan parameter
//   console.log(`Hi, ${name}`);
// }

// greet("Jason"); // jason merupakan argument

// // paramrter/argument merupakan inputan

// function jumlahkan(a, b) {
//   const total = a + b;
//   console.log(total);
// }

// function jumlahkanLagi(a = 0, b = 0) {
//     const total = a + b;
//     console.log(total);
//   }

// jumlahkan(3);
// jumlahkanLagi(2);

// ==============================================================

// konsep return
// mengakhiri proses dalam statement return dan menampilkan nilai yang didefinisikan

// function penjumlahan(a = 0, b = 0, c = 0) {
//   const total = a + b + c;
//   return total;
// //   console.log('selesai') // tidak akan dijalankan karena return sudah mengakhiri program
// }

// function penjumlahanLagi(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'bukan angka';
//     }
//     return a + b;
// }

// ==============================================================

// // konsep scope
// visibilitas variabel
// --> variabel let dengan value "Javascript" memiliki nilai yang lebih besar daripada "Python"

// let programming = "Javascript";

// function learn() {
//   let programming = "Python";
//   console.log(programming);
// }

// learn();

// console.log(programming);

// let tinggi = 8;
// if (tinggi > 5) {
//   let lebar = 10;
//   console.log(lebar);
// }

// console.log(tinggi);

// var > let / const
// var tidak memiliki blocking scope dan sangat general, tidak direkomendasikan menggunakan var

// ==============================================================

// // konsep lexical scope

// function lamarKerja() {
//   const jabatan = "programmer";

//   function orangDalam() {
//     function lebihDalam() {
//       let kenalan = `Orang dalam bisa masukkan ${jabatan}`;
//       console.log(kenalan);
//     }
//     lebihDalam();
//   }
//   orangDalam();
// }

// lamarKerja();

// ==============================================================

// function expression

// function perpangkatan(nilai) {
//   return nilai * nilai;
// }

// let hasil = perpangkatan();

// console.log(perpangkatan(2));

// const hasilPerpangkatan = function (nilai) {
//   return nilai * nilai;
// };

// console.log(hasilPerpangkatan(4));

// ==============================================================

// function sebagai argumen function lain

// function duaKali(func) {
//   func();
//   func();
// }

// function lemparDadu() {
//   const nilai = Math.floor(Math.random() * 6) + 1;
//   console.log(nilai);
// }

// console.log(duaKali(lemparDadu));

// ==============================================================

// function bernilai balik function

// function hasilnyaAdalahFunction() {
//   const rand = Math.random() + 3;
//   if (rand > 3) {
//     return function () {
//       console.log("Selamat Nilai lebih besar");
//     };
//   } else {
//     return function () {
//       console.log("Maaf Nilai rendah");
//     };
//   }
// }

// const result = hasilnyaAdalahFunction();

// console.log(result());

// ==============================================================

//function
// function myFun() { //function biasa
//   console.log("Hi");
//   return "Hello";
// }

// console.log(myFun());

//method
// const myMath = {
//   //object
//   perkalian: function (x, y) {
//     //method
//     return x * y;
//   },
// };

// console.log(myMath.perkalian(2, 3));

// ==============================================================

// this adalah keyword untuk memanggil suatu property pada object yang sama
// Tujuannya unuk mendapat nilainya

// const saya = {
//   nama: "Iqyan",
//   hobi: "Makan",
//   kenalan: function () {
//     return `Hi, Saya ${this.nama}. Hobi saya ${this.hobi}`;
//   },
// };

// console.log((saya.nama = "Siti"));
// console.log(saya.kenalan());
// console.log((saya.hobi = "Shopping"));
// console.log(saya.kenalan());

// ==============================================================

// try n catch --> penting
// try {
//   Saya.kenalan();
// } catch {
//   console.log("Error!");
// }

// console.log(saya.kenalan());
// console.log("Setelah proses try n catch");

// function teriak(msg) {
//   try {
//     console.log(msg.toUpperCase());
//   } catch (error) {
//     console.log(error);
//     console.log("Silahkan masukkan tipe data string!");
//   }
// }

// console.log(teriak("Bang"));
