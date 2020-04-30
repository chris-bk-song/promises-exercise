var urls = [
  'https://dog.ceo/api/breed/beagle/images/random',
  'https://dog.ceo/api/breed/chow/images/random',
  'https://dog.ceo/api/breed/akira/images/random',
  'https://dog.ceo/api/breed/dingo/images/random',
  'https://dog.ceo/api/breed/eskimo/images/random',
];

console.log('starting promise chain');

// This is callback hell (don't do this)
// $.get(urls[0], function(data) {
//   console.log(data);
//   $.get(urls[1], function(data1) {
//     console.log(data, data1);
//     $.get(urls[2], function(data2) {
//       console.log(data, data1, data2);
//       $.get(urls[3], function(data3) {
//         console.log(data, data1, data2, data3);
//         $.get(urls[4], function(data4) {
//           console.log(data, data1, data2, data3, data4);
//         })
//       })
//     })
//   })
// })

// This is promise chain
// $.get(urls[0])
//   .then((data) => {
//     console.log('chain 1: ', data);
//     return $.get(urls[1]);
//   })
//   .then((data) => {
//     console.log('chain 2":', data);
//     return $.get(urls[2]);
//   })
//   .then((data) => {
//     console.log('chain 3":', data);
//     return $.get(urls[3]);
//   })
//   .then((data) => {
//     console.log('chain 4":', data);
//     return $.get(urls[4]);
//   })
//   .then((data) => {
//     console.log('chain 5":', data);
//   });

// This is promise all
// Promise.all([
//   $.get(urls[0]),
//   $.get(urls[1]),
//   $.get(urls[2]),
//   $.get(urls[3]),
//   $.get(urls[4]),
// ]).then((responses) => {
//   console.log('all responses:', responses);
// });

// This is promise all using map
Promise.all(urls.map((url) => {return $.get(url)}))
  .then((responses) => {
    console.log('all responses:', responses);
  });


console.log('finished promise chain');