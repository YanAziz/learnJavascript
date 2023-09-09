// // perulangan [while - for - for of - for in]

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// // initial - condition - increment/decrement

// ==============================================================

// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }
// for (let i = 20; i >= 0; i--) {
//     console.log(i);
// }
// for (let i = 10; i <= 10000; i *= 10) {
//     console.log(i);
// }

// ==============================================================

// // infinite loop

// for (let i = 20; i >= 0; i++){
//     console.log(i);
// }

// ==============================================================

// const animals = ['cat', 'dog', 'deer', 'koala'];

// for (let i = 0; i < animals.length; i++) {
//     console.log(i + 1, animals[i]);
// }

// ==============================================================

// // nested loop

// let str = "LOL";
// for (let i = 0; i <= 4; i++) {
//   console.log("Outer:", i);
//   for (let j = 0; j < str.length; j++) {
//     console.log("   Inner:", str[j]);
//   }
// }

// const pilihanJawaban = "abcd";
// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}. Soal nomor 1:`);
//   for (let j = 0; j <= pilihanJawaban.length; j++) {
//     console.log(`   ${pilihanJawaban[j]}. Pilihan Jawaban`);
//   }
// }

// const studentRow = [
//   ["Olivia", "Liam", "Emma", "Noah"],
//   ["Amelia", "Oliver", "Ava", "Elijah"],
//   ["Sophia", "Mateo", "Isabella", "Lucas"],
// ];

// const abjad = "abcdefghi";

// for (let i = 0; i < studentRow.length; i++) {
//   const row = studentRow[i];
//   console.log(`Seat Row #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(`   ${abjad[j]}. ${row[j]}`);
//   }
// }

// ==============================================================

// // while

// let num = 0;
// while (num < 10) {
//     console.log(num + 1);
//     num++;
// }

// for (let num = 0; num < 10; num++) {
//     console.log(num + 1);
// }

// const password = '123';

// let guess = prompt('Enter the password!');
// while (guess !== password) {
//     guess = prompt('Enter the password!');
// }

// alert('Password correct');

// ==============================================================

// let input = prompt('Go');
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === 'stop') break;
// }

// alert('Ok');

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//     if (i === 5) break;
// }

// ==============================================================

// // Game tebak angka

// let maximum = parseInt(prompt("Masukkan Nilai Maksimal!"));
// while (!maximum) {
//   maximum = parseInt(prompt("Masukkan Nilai Maksimal!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(maximum);

// let guess = parseInt(prompt("Isi tebakan pertama kamu!"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//   attempts++;
//   if (guess > targetNum) {
//     guess = prompt("Nilai terlalu tinggi! Tebak lagi!");
//   } else {
//     guess = prompt("Nilai terlalu rendah! Tebak lagi!");
//   }
// }

// alert(`Selamat Tebakan Benar! Dengan percobaan ${attempts} kali`);

// ==============================================================

// for of --> struktur data array

// for (variable of iterable) {
//    statement
// }

// const fruits = ["Banana", "Mango", "Apple"];

// // for biasa
// for (let i = 0; i < fruits.length; i++) {
//   console.log(`Buah ${fruits[i]}`);
// }

// // for of
// for (let fruit of fruits) {
//   console.log(`Buah ${fruit}`);
// }

// const studentRow = [
//   ["Olivia", "Liam", "Emma", "Noah"],
//   ["Amelia", "Oliver", "Ava", "Elijah"],
//   ["Sophia", "Mateo", "Isabella", "Lucas"],
// ];

// const index = "12345";
// const abjad = "abcdefg";

// for (let row of studentRow) {
//   console.log(`Seat Row #${index}`);
//   for (let student of row) {
//     console.log(`   ${abjad[studentRow]} Siswa ${student}`);
//   }
// }

// for (let i = 0; i < studentRow.length; i++) {
//   const row = studentRow[i];
//   console.log(`Seat Row #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(`   ${abjad[j]}. ${row[j]}`);
//   }
// }

// ==============================================================

// // for in --> struktur data objek

// const studentScore = {
//   Olivia: 20,
//   Ema: 29,
//   Raju: 63,
//   Yuro: 12,
// };

// // for (let student in studentScore) {
// //   console.log(`${student} memiliki skor ${studentScore[student]}`);
// // }

// let total = 0;
// let scores = Object.values(studentScore);

// for (let score of scores) {
//   total += score;
// }

// console.log(total / scores.length);
