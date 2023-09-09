// %Mengatur default value pada function%

// function lemparDadu(sisi = 6) {
//   // default valuenya 6
//   return Math.floor(Math.random() * sisi) + 1;
// }

// console.log(lemparDadu());

// function sapa(name = "user", msg = "selamat bekerja") {
//   console.log(`${name} ${msg}`);
// }

// console.log(sapa("yan", "hai"));

// // perhatikan posisi pada argumen dan parameter

// ==============================================================

// %Mengubah Array atau Object menjadi Deret Value Argument Function%

// const angka = [1, 2, 3, 4, 5];

// console.log(Math.max(angka)); // NaN
// console.log(Math.max(...angka)); // gunakan "..." untuk menghitung
// console.log(Math.min(...angka));

// ==============================================================

// %Menggabungkan nilai array dengan array lagi%

// const angka = [1, 2, 3, 4, 5, 6];
// const huruf = ["a", "b", "c", "d", "e"];

// const campuran = [...angka, 7, 8, ...huruf, "j", "k"];

// console.log(campuran);

// ==============================================================

// object This di dalam arrow function mengarah pada object global window

// const person = {
//   firstname: "John",
//   lastname: "Doe",
//   fullname: function () {
//     // jika function diubah menjadi arrow function, akan menjadi global scope
//     return `${this.firstname} ${this.lastname}`;
//   },
// };

// console.log(person.fullname());

// ==============================================================

// %merge object dg spread operator%

// const user = {
//   name: "John",
//   email: "john@doe.com",
// };

// const userNew = { ...user, id: 123, age: 18 };

// console.log(user);
// console.log(userNew);

// ==============================================================

// %rest param%

// const sumAll = (...nums) => {
//   return nums.reduce((total, el) => total + el);
// };

// console.log(sumAll(1, 2, 3, 4, 5, 6, 8));

// const huruf = ["a", "b", "c", "d", "e"];

// const iniHuruf = (gold, perak, perunggu, ...sisa) => {
//   console.log(`Gold: ${gold}`);
//   console.log(`Perak: ${perak}`);
//   console.log(`Perunggu: ${perunggu}`);
//   console.log(`Lainnya: ${sisa}`);
// };

// console.log(iniHuruf(...huruf));

// ==============================================================

// %destructing - unboxing array dan object%

// const huruf = ["a", "b", "c", "d", "e"];

// const iniHuruf = (gold, perak, perunggu, ...sisa) => {
//   console.log(`Gold: ${gold}`);
//   console.log(`Perak: ${perak}`);
//   console.log(`Perunggu: ${perunggu}`);
//   console.log(`Lainnya: ${sisa}`);
// };

// // console.log(iniHuruf(...huruf));

// const [gold, silver, bronze, ...hurufLain] = huruf;

// console.log(gold);
// console.log(hurufLain);

// ==============================================================

// %destrucing object%

// const user = {
//   name: "John",
//   email: "john@doe.com",
// };

// const { name: nama, email, phone = "093482632" } = user;

// console.log(nama);
// // console.log(name); // error karena name sudah diubah menjadi nama
// console.log(email);
// console.log(phone);

// ==============================================================

// %destrucing function param%

// const user = {
//   name: "John",
//   email: "john@doe.com",
//   role: "admin",
// };

// const userAndRole = ({ name, role }) => {
//   return `${name} ${role}`;
// };

// console.log(userAndRole(user));

// const animes = [
//   {
//     title: "Attack on Titan",
//     rating: 90,
//     year: 2013,
//   },
//   {
//     title: "One Piece",
//     rating: 89,
//     year: 1999,
//   },
//   {
//     title: "Naruto",
//     rating: 80,
//     year: 2002,
//   },
// ];

// const anime = animes.map(({ title, year, rating }) => {
//   return `${title} (${year}) rating ${rating}`;
// });

// console.log(anime);
