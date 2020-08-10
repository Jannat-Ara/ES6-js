const ages = [12 , 13, 14 , 15 , 16];
const ages2 = [ 17, 18 , 19, 20, 21];
const ages3 = [ 22, 23, 24, 25, 26];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
console.log(allAges);
// ES 6 form
const allAges2 = [...ages, ...ages2,...ages3];
console.log(allAges2);


// finding maximum

const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max( business, minister, sochib);
console.log(maximum);
// ES6 form
const takaPoisha = [650, 250, 450];
const maximum2 = Math.max(...takaPoisha);
console.log(maximum2);