/**
 * const: Block Scope의 상수
 */

// 1. block scope 확인
try {
    if(true){
        const num = 10;
    }

    console.log(num);
} catch(e) {
    console.error("error:" + e);
}

// 2. error: 대입(Assignment) 에러
try {
    const num = 10;
    num = 20;
} catch(e) {
    console.error("error:" + e);
}