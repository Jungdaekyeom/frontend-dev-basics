/**
 * Arrow Function
 */

const power = function (x) {
    return x * x;
}

// 일반 형태
let numbers = [1, 2, 3, 4, 5];
console.log("일반 함수\t\t");
numbers.forEach(function (n) {
    
    process.stdout.write(`${n}:${power(n)}\t`);
});

// 어나니머스 함수
console.log("\n------------------------------------");
console.log("어나니머스 함수\t\t");
numbers.forEach(function(n){
    
    let result = (function(x){
        return x * x;
    })(n);

    process.stdout.write(`${n}:${power(n)}\t`);

});

// 어로우 함수
console.log("\n------------------------------------");
console.log("어로우 함수\t\t");
numbers.forEach(function(n){
    
    let result = (x => {
        return x * x;
    })(n);

    process.stdout.write(`${n}:${power(n)}\t`);

});

// 람다 함수
console.log("\n------------------------------------");
console.log("람다 함수\t\t");
numbers.forEach(function(n){
    
    let result = (x => x * x)(n);
    process.stdout.write(`${n}:${power(n)}\t`);

});