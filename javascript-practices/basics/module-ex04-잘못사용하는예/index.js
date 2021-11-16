// 잘못 사용하는 예

// require 잘 못 쓰는 유형 총 집합
var mod01 = require('./error-module01');
var mod02 = require('./error-module02');
var mod03 = require('./error-module03');

console.log(mod01);
mod02();
console.log(mod03);
