let a = 10;

function increment(val) {
  let b = 5000;
  return val + 1;
}

function doSomething() {
  let b = 30;
  a = increment(a);
}

doSomething();

doSomething();
doSomething();

console.log(a);
