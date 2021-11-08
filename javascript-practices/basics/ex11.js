/**
 * Array 메소드
 * 
 * 
 */

var colors = ['black', 'blue', 'red'];
var fruits = ['apple', 'banana', 'mango'];

// concat
var a1 = fruits.concat(colors);
console.log(a1);

// pop, push: stach 지원
var color = colors.pop();
console.log(color);
console.log(colors);

colors.push("red");
console.log(colors);

// join
var str = fruits.join(":");
console.log(str);

// reverse
console.log(fruits);
fruits.reverse();
console.log(fruits);

// shift
var numbers = [1000, 2000, 3000, 4000, 5000];
var number = numbers.shift();
console.log(number, numbers);

// sort
var numbers = [2000, 1000, 5000, 4000, 3000];
numbers.sort();
console.log(numbers);

// slice
var numbers = numbers.slice(1,3);
console.log(numbers);

// splice : ??
// index부터 count개를 삭제 후, 삭제된 요소를 반환
console.log(fruits);
var fruits2 = fruits.splice(0/* index */, 2/* count */)
console.log(fruits2, fruits)

var a1 = [0,1,2,3,4];
var a2 = a1.splice(1,3,10);
console.log(a2, a1); // 123 잘라내서 a2에 저장하고, a1에는 그 위치에 10을 반환