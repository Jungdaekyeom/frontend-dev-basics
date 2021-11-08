/**
 * Data
 * 
 */

// 현재 시간
var now = new Date();
console.log(now);

// 2022년 11월 8일
var d1 = new Date(2022, 10/* month - 1 */, 8);
console.log(d1);

// 2022년 11월 8일 12:30:00
var d2 = new Date(2022, 10, 8, 12, 30, 40);
console.log(d2);

// 객체 메소드
console.log(
    "년도:" + (d2.getYear() + 1900) + "\n"
);

d2.setFullYear(2023);
console.log(d2);