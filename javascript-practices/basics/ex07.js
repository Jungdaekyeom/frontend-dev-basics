/**
 * 자바스크립트 객체2 - function type(함수)
 */

// 일반 함수(실행코드 블록이 있는 함수, 관례대로 소문자로 시작)
var myFunction = function() {
    console.log("일반함수");
}

myFunction();

// 생성자 함수(관례대로 대문자로 시작)
var MyObject = function(name, age){
    this.name = name;
    this.age = age;
}

var o1 = new MyObject('알파', 10);
var o2 = new MyObject('베타', 20);

console.log(o1);
console.log(o2);