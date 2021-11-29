/**
 * 6. 구조 분해
 */

// ex1 - basic
const user = {
    firstName: '대',
    lastName: '겸',
    email: 'pocpoc0202@naver.com'
};

({firstName, lastName} = user);
// firstName = user.firstName;
// lastName = user.lastName;
// let {firstName, lastName} = user;
// f = function({firstName, lastName}){}

console.log(firstName, lastName);
console.log(user);

// ex2 - Default Value
const goods = {
    name: 'TV',
    price: 10000,
    stockCount: 30
}

let {name, price, countStock = 0, stockCount = 0 } = goods;
console.log(name, price, countStock, stockCount);

// ex03 - 구조 분해해야 할 객체의 속성과 변수 이름이 다를 때
const person = {
    name: '정대겸',
    country: 'Korea',  
};

const {name: fullName, country:place} = person;
console.log(fullName, place);

// ex04 - 내부 객체(Nested Object)의 구조 분해
const student = {
    name: '정대겸',
    age: 29,
    score: {
        math: 100,
        korean: 90,
        science: 100,
    }
};

const {
    name:studentName,
    score:{
        math=0, 
        korean=0, 
        science=0, 
        music=0
    }
} = student;

// 멀티라인 지원해줌
console.log(`${studentName}의 성적
수학:${math}
국어:${korean}
과학:${science}
음악:${music}
`)

// ex05 - 함수의 파라미터
const averageScore1 = function(o){
    console.log(`${o.name}의 평균은 ${(o.score.math + o.score.korean + o.score.science) / 3} 입니다.`);
};

const averageScore2 = function({name:studentName, score:{math=0, korean=0, science=0}}) {
    console.log(`${studentName}의 평균은 ${(math + korean + science) / 3} 입니다.`);
};

averageScore1(student);
averageScore2(student);

// ex06 - 배열....