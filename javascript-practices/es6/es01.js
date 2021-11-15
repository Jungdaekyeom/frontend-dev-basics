/**
 * let: Block Scope의 변수
 */

// let: 변수(變數)

// let의 블록 범위
try {
    if (true) {
        var i = 10;
        let j = 20;
    }

    console.log(j) // 블록 범위이므로, 에러남 error:ReferenceError: j is not defined
    console.log(i);

} catch (e) {
    console.log('error:' + e);
}

// cf: var 함수 범위
try {
    let f = function () {
        var m = 20;
    }

    f();
    console.log(m) // 에러남 errorReferenceError: m is not defined
} catch (e) {
    console.error('error' + e);
}