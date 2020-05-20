function forLoop(array) {
  for (let i = 0; i < 26; i++) {
    array[array.length] = `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
  }
}
function whileLoop(number) {
  while (number > 0) {
    console.log(number)
    number -= 1
  }
  return "done"
}
function incrementVariable(i) {
i = i - 1;
return i;
}
function doWhileLoop(integer) {
if (integer == 10) {
var John = 1
while (John < 11) {
console.log("I run once regardless.")
John += 1
}
} else {
do {
    console.log("I run once regardless.")
  } while (incrementVariable(integer) >= integer);
}
}
