const { interval } = require('rxjs');
const { map, filter } = require('rxjs/operators');


// Marble Graph (un tiret === 250ms)
// ----0----1----2----3---...
// map((val) => val + 1)
// ----1----2----3----4---...
// filter((val) => val % 2 === 1)
// ----1---- ----3---- ---...

interval(1000).pipe(
  map((val) => val + 1),
  filter((val) => val % 2 === 1)
).subscribe((val) => console.log(val));
