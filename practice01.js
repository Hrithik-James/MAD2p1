const myPromise = new Promise((resolve) => {
  resolve(2);
})
.then(value => {
  console.log("1st then:", value);  // 2
  return value + 1;
})
.then(value => {
  console.log("2nd then:", value);  // 3
  return value * 2;
})
.then(value => {
  console.log("3rd then:", value);  // 6
});

myPromise.then(result => {
  console.log(result);
});