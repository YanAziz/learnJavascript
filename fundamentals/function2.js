// foreach method

// Dapat mengubah callback function yang berarti dapat memanggil
// sebuah fungsi sebanyak jumlah element yang dimiliki array

// const angka = [1, 2, 3, 4, 5, 6];

// function print(element) {
//   console.log(element);
// }

// console.log(print(angka[1]));

// angka.forEach(function (n) {
//   console.log(n * n);
// });

// angka.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

// console.log(el);

// const movies = [
//   {
//     title: "Dul",
//     rating: 82,
//   },
//   {
//     title: "El",
//     rating: 79,
//   },
//   {
//     title: "Jarwo",
//     rating: 83,
//   },
// ];

// movies.forEach(function (movie) {
//   console.log(`${anime.title} - ${anime.rating}/100`);
// });

// ==============================================================

// map
// nilai baliknya adalah array baru yang sudah dimodifikasi melalui callback function dari suatu array

// const expression = ["rofl", "lol", "omg", "ttyl"];
// const capsExpression = expression.map(function (exprs) {
//   return exprs.toUpperCase();
// });

// console.log(expression);
// console.log(capsExpression);

// const angka = [1, 2, 3, 4, 5];
// const angkaDouble = angka.map(function (num) {
//   return num * 2;
// });

// console.log(angka);
// console.log(angkaDouble);

// const movies = [
//   {
//     title: "Dul",
//     rating: 82,
//   },
//   {
//     title: "El",
//     rating: 79,
//   },
//   {
//     title: "Jarwo",
//     rating: 83,
//   },
// ];

// const movieList = movies.map(function (movie) {
//   return movie.title.toUpperCase();
// });

// console.log(movieList);

// ==============================================================

// arrow function

// const pangkat = (x) => {
//   return x * x;
// };

// console.log(pangkat(3));

// 2 tampilan arrow function

// jenis 1 - normal
// const random = () => {
//   return Math.floor(Math.random() * 1000);
// };

// jenis 2 - tanpa return
// const random2 = () => Math.floor(Math.random() * 1000);

// console.log(random());
// console.log(random2());

// ==============================================================

// settimeout - setinterval

// setTimeout - setInterval
// callback function yang bukan berasal dari array
// fungsinya untuk memberi waktu jeda dan melakukan perulangan setiap waktu yang ditentukan

// setTimeout(() => {
//     //process
// }, 3000); // proses akan dieksekusi setelah 3 detik

// setInterval(() => {
//     //process
// }, 2000) // akan melakukan proses secara berulang setiap 2 detik

// setTimeout
// console.log("Halo...");

// setTimeout(() => {
//   console.log("Masi disana gak?");
// }, 3000);

// console.log("Saya pergi yaa...");

// setInterval
// const interval = setInterval(() => {
//   console.log(Math.random());
// }, 2000);

// clearInterval(interval); // untuk menstop

// ==============================================================

// filter
// function yang akan mengembalikan nilai array lagi yang sudah
// dimanipulasi sesuai dengan kriteria yang ditetapkan

// const angka = [1, 2, 3, 4, 5, 6, 7, 8];

// const ganjil = angka.filter((n) => {
//   return n % 2 === 1;
// });

// const angkaBaru = angka.filter((n) => {
//   return n < 4;
// });

// console.log(ganjil);
// console.log(angka);
// console.log(angkaBaru);

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

// const animeBagus = animes.filter((anime) => anime.rating >= 85);
// const judulAnimeBagus = animeBagus.map((anime) => anime.title);

// const animeCukupBagus = animes.filter((anime) => anime.rating <= 85);

// const judulAnimeBagusNew = animes.filter((anime) => anime.rating >= 85).map((anime) => anime.title);

// console.log(animeBagus);
// console.log(animeCukupBagus);
// console.log(judulAnimeBagus);
// console.log(judulAnimeBagusNew);

// ==============================================================

// every (harus semua)
// akan mengembalikan nilai boolean
// true pada saat seluruh nilai yang ada pada suatu array memiliki kriteria yang sama
// false jika sebaliknya

// some (boleh salah satu)
// mirip dengan every
// tapi lebih fleksibel dan hasilnya akan true jika salah satu isi dari array memiliki kriteria yang sama
// false jika sama sekali tidak ada yang sesuai kriteria

// const kataKata = ["kita", "kamuya", "saya"];
// const hitungHurufEvery = kataKata.every((kata) => kata.length === 4);
// const hitungHurufSome = kataKata.some((kata) => kata.length === 4);

// console.log(hitungHurufEvery);
// console.log(hitungHurufSome);

// const examScore = [80, 85, 79, 90, 93, 77];
// const isGraduate = examScore.every((score) => score >= 75);

// console.log(isGraduate);

// ==============================================================

// reduce
// melakukan proses sebanyak element milik suatu array
// nilai baliknya adalah single value

// const subtotal = [1500, 20000, 4000, 19000, 32000];

// menggunakan for
// let totalFor = 0;
// for (let hasil of subtotal) {
//   totalFor += hasil;
// }
// console.log(totalFor);

// menggunakan reduce
// const total = subtotal.reduce((currentTotal, singleSubtotal) => {
//   return currentTotal + singleSubtotal;
// });

// penjelasan proses reduce diatas

// proses 1
// currentTotal + singleSubtotal --> 1500 + 20000
// nilai balik = 21500
// proses 2
// currentTotal + singleSubtotal --> 21500 + 4000
// nilai balik = 25500 (dan seterusnya)

// key
// indeks 0 + indeks 1 = nilaiBalik1
// nilaiBalik1 + indeks 2 = nilaiBalik2 (dan seterusnya)

// console.log(total);

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

// const animeTerburuk = animes.reduce((animeTerburuk, currentAnime) => {
//   if (currentAnime.rating < animeTerburuk.rating) {
//     return currentAnime;
//   }
//   return animeTerburuk;
// });

// console.log(animeTerburuk);

// ==============================================================