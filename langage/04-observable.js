// function timeout(delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(); // appele le callback du then
//     }, delay);
//   });
// }


// // setTimeout(() => console.log('1s'), 1000);
// timeout(1000).then(() => console.log('1s'));

const { Observable } = require('rxjs');

function interval(delay) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next(); // appele le callback du then
    }, delay);
  });
}

// setInterval(() => console.log('1s'), 1000);
interval(1000).subscribe(() => console.log('1s'));
