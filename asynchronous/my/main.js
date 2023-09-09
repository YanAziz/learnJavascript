// Call Stack -> mekanisme memori di js  -- (rumusPhy)

/* 
Call Stack Function

yaitu mekanisme untuk interpreter (seperti interpreter Javascript di browser web) untuk
melacak lokasi skrip yang memanggil banyak fungsi-fungsi yang sedang dijalankan dan
fungsi apa yang dipanggil dari dalam fungsi itu, dll

*/

// ------------------------------------------------------------------

// Faktanya Javascript itu Single Thread

/* 
Aslinya Javascript dibaca secara sinkronus -- (example)

Single thread adalah sebuah program yang hanya dapat menjalankan satu proses dalam satu waktu

Cara Kerjanya
- Browser dibuat dengan API yang bisa menjalankan tugas dibalik layar (kaya bikin setTimeOut)
- Javascript Call Stack memahami fungsi-fungsi API sehingga bisa memanfaatkan kerjaan browser
- Pada saat browser selesai menjalankan tugas, hasilnya akan dimasukkan ke dalam stack 
    sebagai callback

*/

// ------------------------------------------------------------------

// Callback Hell di Javascript bikin serem -- (Callback Hell)

// ------------------------------------------------------------------

// Latihan Request Pakai Callback Function -- (Request Callback)

// ------------------------------------------------------------------

// Latihan Request pakai Promise -- (Request Promise)

// ------------------------------------------------------------------

// Cara benar menggunakan Fungsi Promise -- (Promise)

// ------------------------------------------------------------------

// Cara membuat Promise -- (Create Promise)

// ------------------------------------------------------------------

// Fungsi Async Keyword -- (Async)

/*
Ada 2 bagian :
1. Async
2. Await

Async
- Fungsi Async akan otomatis menjadi promise
- Kalo fungsinya punya data, maka resolve-nya akan mengirimkan data juga
yang bisa diolah
- Kalo di dalam function ada object throw error, maka akan menjalankan
bagian reject
*/

// ------------------------------------------------------------------

// Fungsi Await Keyword -- (Await)

/*

Await 
- Keyword await hanya bisa kita gunakan di dalam function dengan "async"
- Await akan melakukan jeda proses selanjutnya di dalam function, menunggu
promise yang dijalankan resolved

*/

// ------------------------------------------------------------------

// Mengelola Kondisi Error dengan Async Await -- (Error Async Await)

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------
