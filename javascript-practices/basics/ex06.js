/*
자바스크립트 객체 : object 타입

1. 자바스크립트 객체는 obgect 타입과 function 타입이 있다.
2. 보통, function 타입 객체는 함수라 부른다.
3. 따라서 자바스크립트에서 우리가 흔히 객체라 부르는 것은 object 타입의 객체라 할 수 있다.
*/

var o = new MyObject('알파');
console.log(o.name);

// 생성방법1
// 생성자 함수를 사용하는 방법
// Object, Number, String, RegExp, Date, Array - 내장 생성자 함수
var o1 = new Object();
o1.name='알파'
o1.age = 10;
o1.another = new Object();
o1.another.name = '베타';
o1.another.age = 30;

console.log(o1);

// 그리고 사용자 정의 생성자 함수
var MyObject = function(name){
    this.name = name;
}

// 생성방법2
// {} 리터럴을 사용하는 방법
var o2 = {};
o2.name='알파'
o2.age = 10;
o2.another = new Object();
o2.another.name = '베타';
o2.another.age = 30;

console.log(o2);


// 생성방법3
// JSON(Java Script Object Notation)
var o3 = {
    name: '알파',
    age: 10,
    another: {
        name: '베타',
        age: 30
    }
}

console.log(o3);

// XmlHttpRequest 호스트(브라우저) 객체를 사용해서 통신(Ajax)에서 데이터 교환의 포맷으로 JSON을 사용한다.
var response = "{name: '둘리', age: 10, anothe:{name: '베타', age: '30'}}";
var userVo = eval("("+response+")");
console.log(userVo);