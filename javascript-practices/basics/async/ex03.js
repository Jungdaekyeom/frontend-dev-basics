// ex02를 땡겨옴
// 셀프 실행이 되어야 하는 모듈(독립적으로 실행되는 모듈)은 이렇게 갖고올 수 있다
// ex02 임포트
const ex02 = require('./ex02');
// 비동기 함수 아님
const ex03 = async function(param) {
    try{
        const res = await ex02(param);
        console.log(res);
    } catch(err) {
        console.error(err);
    }
}

ex03("param-data");
ex03("param-error");

console.log('wait...');