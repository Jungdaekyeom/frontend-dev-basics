/*

변수와 데이터 타입
[기본타입(primitive type), 유사객체]
undefined
number
string
boolean

[객체1] - object type

1. new 생성자함수() 사용해서 생성
    Number() -> object type
    Boolean() -> object type
    String() -> object type
    Object() -> object type
    Array() -> object type
2. null
3. {} (객체 리터럴, JSON)
4. [] (배열 리터럴) 

[객체2] - function type
1. new Function(...) 생성
2. var f = function(){} 함수 리터럴1을 사용해서 생성(선생님추천)
3. function f(){}
*/

/*
자바스크립트의 객체를 구분하는 또 다른 방법
1. 내장 (Built-In, Native, Engine) 객체
    자바스크립트 엔진 안에 미리 내장되어 있는 객체
    Number, Boolean, Date, RegExp, ... : 생성자 함수
    ParseInt, setTimeout, ...          : 일반 함수
2. 호스트 객체
    자바스크립트 엔진이 임베디드된 환경(호스트)의 객체(자바스크립트 접근 가능)
    호스트 환경이 브라우저라면: document, location, XmlHttpRequest(통신할 때), window
    호스트 환경이 노드(Node.JS)라면: os, http, fs, path
3. 사용자 객체
    자바스크립트 엔진이 실행되면서 생서되는 객체들...
*/


console.log("======== 원시 타입(Primitive Type) ========================");

var u = undefined; // 정의가 되어 있지 않다.

console.log(typeof(u));

var k = 2;

console.log(k);

var u = undefined;
var i = 10;
var s = "time";
var b = true;

console.log("u:" + typeof(u));
console.log("i:" + typeof(i));
console.log("s:" + typeof(s));
console.log("s:" + typeof(b));

console.log("======== [객체1] (object type) ========================");
var i2 = new Number(1); // 생성자 함수
var b2 = new Boolean(false); // 생성자 함수
var s2 = new String("감자"); // 생성자 함수
var o = new Object();
var a = new Array();

var o2 = {};
var a2 = [];

var n = null;

console.log("i2:" + typeof(i2));
console.log("b2:" + typeof(b2));
console.log("s2:" + typeof(s2));
console.log("o:" + typeof(o));
console.log("a:" + typeof(a));
console.log("o2:" + typeof(o2));
console.log("a2:" + typeof(a2));
console.log("n:" + typeof(n));

console.log("======== [객체2] (function type) ========================");
var f1 = new Function("a", "b", "return a + b");
var f2 = function(a,b){
    return a+b;
}

console.log("f1:" + typeof(f1));
console.log("f2:" + typeof(f2));

console.log(f1(10, 20))
console.log(f2(10, 20))

console.log("======== 원시타입과 원시 타입을 Wrapper 객체는 구분없이 사용할 수 있다. ========================");

console.log(i+i2);
console.log(s+s2);

// 원시 타입에 메소드가 호출될 때,
// 임시 Wrapper 객체가 만들어져서 메소드 호출이 일어난 뒤 사라진다.(유사객체)
console.log("======== 원시타입도 메소드 호출이 가능하다. ========================");
console.log(b.valueOf());
console.log(b2.valueOf());