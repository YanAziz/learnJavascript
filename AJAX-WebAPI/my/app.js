// const data = `{
//     "ticker": {
//         "base": "BTC",
//         "target": "IDR",
//         "price": "345001000.00000000",
//         "volume": "28.02287745",
//         "change": "-430000.00000000"
//     },
//     "timestamp": 1674472505,
//     "success": true,
//     "error": ""
// }`;

// ----------------------------------------------------------------------------------------------

// // XMLhttp Request

// const req = new XMLHttpRequest();
// let data;

// req.onload = function () {
//   data = JSON.parse(this.responseText);
//   console.log(data);
// };

// req.onerror = function () {
//   console.log("Error", this);
// };

// req.open("GET", "https://swapi.dev/api/people/12");
// req.send();

// ----------------------------------------------------------------------------------------------

// Fetch

// fetch("https://swapi.dev/api/people/95")
//   .then((res) => {
//     if (!res.ok) {
//       throw Error("Could not fetch the data for that resource");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log("json", data);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// // Async Await

// const loadPeople = async () => {
//   try {
//     const res = await fetch("https://swapi.dev/api/people/1");
//     const data = await res.json();
//     console.log(data);
//     const res2 = await fetch("https://swapi.dev/api/people/99");
//     const data2 = await res2.json();
//     console.log(data2);
//   } catch (err) {
//     console.log("Error", err);
//   }
// };

// loadPeople();

// ----------------------------------------------------------------------------------------------

// // Axios

// axios
//   .get("https://swapi.dev/api/people/94")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//     alert(err.message);
//   })


// // Async Await Axios

// const getPeople = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//     console.log(res.data);
//   } catch (error) {
//     console.log(error);
//     console.log(error.message);
//     console.log(error.response.status);
//     console.log(error.response.data);
//   }
// };


