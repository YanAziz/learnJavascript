const form = document.querySelector("#form");
const input = document.querySelector("input");
const list = document.querySelector("#notes");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const notevalue = input.value;
  const newList = document.createElement("li");
  newList.innerText = notevalue;
  list.append(newList);
  input.value = "";
});

list.addEventListener("click", (e) => {
  //   e.target.nodeName === "LI" && e.target.remove();
  e.target.remove();
});

// const lis = document.querySelectorAll("li");
// for (let li of lis) {
//   li.addEventListener("click", function () {
//     li.remove;
//   });
// }
