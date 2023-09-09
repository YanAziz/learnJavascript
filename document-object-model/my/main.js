// DOM - Document Object Model

/* 
DOM adalah sebuah representasi dari struktur dokumen
HTML atau XML dalam bentuk tree oleh Javascript

DOM memungkinkan kta untuk  mengubah struktur, isi
atau stil dokumen melalui kode javascript 

DOM memiliki struktur hierarkis, dimana setiap elemen
dokumen merupakan child node dari elemen lain atau
root node (document)
*/

// ============================================================================

// Selecting with DOM

/*
getElementById
getElementByTagName
getElementByClassName
*/

// ============================================================================

// querySelector

/*
document.querySelector("h1"); // cari element h1 pertama
document.querySelector("#red"); // cari element pertama dengan id bernilai "red"
document.querySelector(".big"); // cari element pertama dengan class bernilai "big"

document.querySelectorAll("h1"); // cari semua element h1
document.querySelectorAll("#red"); // cari semua element dengan id bernilai "red"
document.querySelectorAll(".big"); // cari semua element dengan class bernilai "big"

document.querySelectorAll("p a"); // cari semua attribute a di paragraf pertama
document.querySelectorAll("a"); // cari semua attribute a 

document.queryselector("input[type='checkbox']") // cari input dengan type bernilai checkbox 
*/

// ============================================================================

// Innerhtml, Innertext, Textcontent

/*
Properties dan Methods yang penting diketahui
classlist, getAttribute(), setAttribute(), appendChild(), append(), prepend(), removeChild(),
remove(), createElement, innerText, textContent, innerHTML, value, parentElement, children,
nextSibling, previousSibling, style

best experience = practice

innerHTML = full format
innetText = only text
textContent = format tab, line + text
*/

// ============================================================================

// mendapat attribute di dalam HTML

/*
const banner = document.querySelector('#banner')
banner.setAttribute('class', 'newClassBanner')
banner.getAttribute('class') // outputnya 'newClassBanner'
*/

// ============================================================================

// styling dengan DOM

/*
const heading = document.querySelector('h1')
heading.style.color

akan terbaca ketika style di inline bukan di file eksternal css
*/

// ============================================================================

// classlist untuk styling dengan DOM

/*
const h1 = document.querySelector('h1')
h1.classList.add('bg-info') // menambah kelas
h1.classList.remove('text-white') // menghapus kelas
*/

// ============================================================================

// element parent, child, sibling

/* 
const para = document.querySelector('p')
para.parentElement // menuju orang tuanya
para.children // menuju anaknya
para.previousElementSibling // menuju element setingkat sebelumnya
para.previousSibling // menuju element setingkat sebelumnya berupa tab, spasi, (text yang ada di vscode)
para.nextElementSibling // menuju element setingkat selanjutnya
para.nextSibling // menuju element setingkat selanjutnya berupa tab, spasi, (text yang ada di vscode)
*/

// ============================================================================

// append dan appendChild

/*
append --> only text
appendChild --> not only text
h1.insertadjacentElement('afterend', h2) --> menambahkan h2 setelah h1 
*/

// ============================================================================

// remove dan removeChild

/*
h1.remove() --> menghapus element h1
h1.parentElement.removeChild(h1) --> menghapus element h1 (not recommend)
*/

// ============================================================================

// Memanggil pokemon dengan DOM

/*
practice
*/
