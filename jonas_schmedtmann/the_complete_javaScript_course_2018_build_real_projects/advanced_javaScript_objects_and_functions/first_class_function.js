const years = [1990, 1993, 1997, 2013, 2018];

function arrayCalc(arr, fn) {
  const arrRes = [];

  arr.forEach((el, i) => {
    arrRes.push(fn(arr[i]));
  });

  return arrRes;
}

function calculateAge(el) {
  return 2018 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  return el >= 18 && el <= 81 ? Math.round(206.9 - 0.67 * el) : -1;
}

const ages = arrayCalc(years, calculateAge);
console.log('## ages:', ages);

const fullAges = arrayCalc(ages, isFullAge);
console.log('## fullAges:', fullAges);

const rates = arrayCalc(ages, maxHeartRate);
console.log('## rates:', rates);
