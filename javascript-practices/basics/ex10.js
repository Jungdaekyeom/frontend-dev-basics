/**
 * 배열
 * 
 * 1. 내장객체(생성자 함수)
 */

 console.log("=========1. 내장객체(생성자 함수)============");

var a1 = new Array();
console.log(typeof(a1), a1 instanceof Array, a1.length);

// 배열을 정의할 때 크기 지정은 별 의미가 없다.
// 동적으로 배열이 늘어난다.

var a2 = new Array(10);
a2[0] = 0;
a2[5] = 5;

// 0 undefined 10
// 배열 요소에 값을 지정하지 않으면 undefined
console.log(a2[0], a2[2], a2.length);

// 동적으로 배열이 늘어났음
a2[10] = 11;
console.log(a2[0], a2[2], a2.length);

// 초기값을 지정할 수 있다.
var a3 = new Array(0, 2, 4, 6, 8);
console.log(a3.length);

// 2. 리터럴(선생님 추천)
console.log("=========2. 리터럴============");
var a4 = [function() {
    console.log("Hello");
}, 20, "JavaScrpit", true, {
    name: "마이콜",
    email: "michol@gmail.com"
}];

console.log(a4.length);
for(var i=0; i<a4.length; i++){
    console.log(a4[i]);
}

a4[0]();

// Array VS Object
console.log("=========Array VS Object============");
a5 = []; // 얜 자동으로 늘려줌
a5[0] = 0;
a5["1"] = 1; // 이런식으로 넣어도 index 1번 값으로 들어간다.
a5["name"] = "둘리";
console.log(a5.length, a5[0], a5[1], a5["1"], a5["name"]);

for(prop in a5){
    console.log(prop);
}

o5 = {}; // 얜 자동으로 안늘려줌!
o5.length = "길이!";
o5[0] = 0;
o5["1"] = 1; // 이런식으로 넣어도 index 1번 값으로 들어간다.
o5["name"] = "둘리";
console.log(o5.length, o5["0"], o5[1], o5["1"], o5["name"]);
for(prop in o5){
    console.log(prop);
}

// 유사배열
console.log("==========================================");
a5.forEach(function(e, index) {
    consolel.log(index + " : " + e);
});

// call / apply => this를 바꿔서 출력할 수 있음
Array.prototype.forEach.call(o5, function(e, index){
    consolel.log(index + " : " + e);
});