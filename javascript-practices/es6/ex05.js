/**
 * Arrow Function
 */

const power = function (x) {
    return x * x;
}
// ==========================ex1==========================

// 일반 형태
let numbers = [1, 2, 3, 4, 5];
console.log("일반 함수\t\t");
numbers.forEach(function (n) {

    process.stdout.write(`${n}:${power(n)}\t`);
});

// 어나니머스 함수
console.log("\n------------------------------------");
console.log("어나니머스 함수\t\t");
numbers.forEach(function (n) {

    let result = (function (x) {
        return x * x;
    })(n);

    process.stdout.write(`${n}:${power(n)}\t`);

});

// 어로우 함수(람다 함수랑 같은 거라고 용수가 화냄 ㅠㅠ)
console.log("\n------------------------------------");
console.log("어로우 함수\t\t");
numbers.forEach(function (n) {

    let result = (x => {
        return x * x;
    })(n);

    process.stdout.write(`${n}:${power(n)}\t`);

});

// 람다 함수
console.log("\n------------------------------------");
console.log("람다 함수\t\t");
numbers.forEach(function (n) {

    let result = (x => x * x)(n);
    process.stdout.write(`${n}:${power(n)}\t`);

});

// ==========================ex2==========================
console.log("\n------------------------------------");
console.log("람다 함수\t\t");
numbers.forEach(n => process.stdout.write(`${n}:${power(n)}\t`));


// ==========================ex3==========================
console.log("\n------------------------------------");
console.log("5로 나눈 것들\t\t");
[5, 3, 15, 1045, 43, 92].forEach(e => {
    if (e % 5 == 0) {
        process.stdout.write(`${e}\t`);
    }
});

// ==========================ex4==========================
console.log("\n------------------------------------");
const dooly = {
    name:'둘리',
    friends: ['또치', '마이콜', '도우너', '길동'],
    printFriends: function(){
        this.friends.forEach(function(f){
            console.log(`${this.name}의 친구 ${f}`);
        }.bind(this));
    }
}

dooly.printFriends();

console.log("\n------------------------------------");
console.log("명시적 바인딩\t\t");
const dooly2 = {
    name:'둘리',
    friends: ['또치', '마이콜', '도우너', '길동'],
    printFriends: function(){this.friends.forEach(f => console.log(`${this.name}의 친구 ${f}`));
    }
}

dooly.printFriends();