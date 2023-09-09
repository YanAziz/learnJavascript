// rumusPhy -- Call Stack dengan rumus Phytagoras -- use python visualize (web)

// const perkalian = (x, y) => x * y;
// const akar = (x) => perkalian(x, x);
// const phytagoras = (a, b, c) => akar(a) + akar(b) === akar(c);
// phytagoras(3, 4, 5);

// -----------------------------------------------------------------------------------------------------

// example -- Javascript single thread

// const newTask = input.value; // get user input from task input
// sendToServerAndSaveIt(newTask); // maybe take a while
// input.value = ""; // will process after save data

// console.log("Bakal muncul pertama");
// setTimeout(() => {
//   console.log("Ini udah masuk memory proses tapi dijalankan setelah 3 detik kedepan");
// }, 3000);
// console.log("Bakal muncul kedua");

// -----------------------------------------------------------------------------------------------------

// Callback Hell

// setTimeout(function () {
//   document.body.style.backgroundColor = "red";
//   setTimeout(function () {
//     document.body.style.backgroundColor = "yellow";
//     setTimeout(function () {
//       document.body.style.backgroundColor = "green";
//     }, 1000);
//   }, 1000);
// }, 1000);

// searchMoviesApi(
//   "naruto",
//   function () {
//     saveToMyDb(
//       movies,
//       function () {
//         // kalau berhasil kita simpan
//         filteringMovie(
//           movies,
//           () => {},
//           () => {}
//         );
//       },
//       () => {
//         // kalau gagal kita coba lagi
//       }
//     );
//   },
//   () => {
//     // server error
//   }
// );

// -----------------------------------------------------------------------------------------------------

// Resuest Callback

// // callback version
// const requestCallback = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     if (delay > 4000) {
//       failure("Error: Connection Timeout");
//     } else {
//       success(`Success: ${url} (${delay}ms)`);
//     }
//   }, delay);
// };

// // Promise version
// const requestPromise = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//       if (delay > 2000) {
//         reject("Error: Connection Timeout");
//       } else {
//         resolve(`Success: ${url} (${delay}ms)`);
//       }
//     }, delay);
//   });
// };

// async function requestHandler() {
//   try {
//     let result = await requestPromise("movie.com");
//     console.log(result);
//   } catch (error) {
//     console.log("Pesan Error", error);
//   }
// }

// requestPromise('movie.com')
// 	.then((result) => {
// 		console.log('page 1');
// 		console.log(result);
// 		return requestPromise('movie.com');
// 	})
// 	.then(() => {
// 		console.log('page 2');
// 		return requestPromise('movie.com');
// 	})
// 	.then(() => {
// 		console.log('page 3');
// 		return requestPromise('movie.com');
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// requestPromise('movie.com')
// 	.then((response) => {
// 		console.log('success', response);
// 		requestPromise('movie.com')
// 			.then((response) => {
// 				console.log('success', response);
// 				requestPromise('movie.com')
// 					.then((response) => {
// 						console.log('success', response);
// 						requestPromise('movie.com')
// 							.then((response) => {
// 								console.log('success', response);
// 								requestPromise('movie.com')
// 									.then((response) => {
// 										console.log('success', response);
// 									})
// 									.catch((error) => {
// 										console.log('error', error);
// 									});
// 							})
// 							.catch((error) => {
// 								console.log('error', error);
// 							});
// 					})
// 					.catch((error) => {
// 						console.log('error', error);
// 					});
// 			})
// 			.catch((error) => {
// 				console.log('error', error);
// 			});
// 	})
// 	.catch((error) => {
// 		console.log('error', error);
// 	});

// requestCallback(
// 	'movie.com',
// 	function (response) {
// 		console.log('success', response);
// 		requestCallback(
// 			'movie.com',
// 			function (response) {
// 				console.log('success', response);
// 				requestCallback(
// 					'movie.com',
// 					function (response) {
// 						console.log('success', response);
// 						requestCallback(
// 							'movie.com',
// 							function (response) {
// 								console.log('success', response);
// 								requestCallback(
// 									'movie.com',
// 									function (response) {
// 										console.log('success', response);
// 									},
// 									function (error) {
// 										console.log('error', error);
// 									}
// 								);
// 							},
// 							function (error) {
// 								console.log('error', error);
// 							}
// 						);
// 					},
// 					function (error) {
// 						console.log('error', error);
// 					}
// 				);
// 			},
// 			function (error) {
// 				console.log('error', error);
// 			}
// 		);
// 	},
// 	function (error) {
// 		console.log('error', error);
// 	}
// );

// requestCallback(
//   "movie.com",
//   function (response) {
//     console.log("berhasil", response);
//   },
//   function (error) {
//     console.log("error", error);
//   }
// );

// -----------------------------------------------------------------------------------------------------

// Request Promise

// requestPromise("movie.com")
//   .then((response) => {
//     console.log("success", response);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

// -----------------------------------------------------------------------------------------------------

// Promise

// requestPromise("movie.com")
//   .then((result) => {
//     console.log(result);
//     console.log("page 1");
//     return requestPromise("movie.com")
//   })
//   .then(() => {
//     console.log("page 2");
//     return requestPromise("movie.com");
//   })
//   .then(() => {
//     console.log("page 3");
//     return requestPromise("movie.com");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// -----------------------------------------------------------------------------------------------------

// Create Promise

// const contohPromise = () => {
//   return new Promise((resolve, reject) => {
//     // resolve(() => {
//     //   `Berhasil`;
//     // });
//     reject(() => {
//       `Gagal`;
//     });
//   });
// };

// const delayedColorChange = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };

// delayColorChange("red", 1000)
//   .then(() => delayColorChange("blue", 1000))
//   .then(() => delayColorChange("green", 1000))
//   .then(() => delayColorChange("yellow", 1000))
//   .then(() => delayColorChange("black", 1000))
//   .then(() => delayColorChange("purple", 1000))
//   .then(() => delayColorChange("blue", 1000));

// -----------------------------------------------------------------------------------------------------

// Async

// async function hello() {}

// const hello = async () => {
//   throw "Maaf ga kenal";
//   //   return "hello world";
// };

// hello()
//   .then((res) => {
//     console.log("response", res);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// -----------------------------------------------------------------------------------------------------

// Await

// async function changeColor() {
//   await delayedColorChange("red", 1000);
//   await delayedColorChange("blue", 1000);
//   await delayedColorChange("green", 1000);
//   await delayedColorChange("yellow", 1000);
//   await delayedColorChange("black", 1000);
//   return "All done!";
// }

// async function printRainbow() {
//   await changeColor();
//   console.log("All done! Dari printRainbow");
// }

// printRainbow();

// -----------------------------------------------------------------------------------------------------

// Error Async Await

const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 2000) {
        reject("Error: Connection Timeout");
      } else {
        resolve(`Success: ${url} (${delay}ms)`);
      }
    }, delay);
  });
};

async function requestHandler() {
  try {
    let result = await requestPromise("movie.com");
    console.log(result);
  } catch (error) {
    console.log("Error", error);
  }
}
