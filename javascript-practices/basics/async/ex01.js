// 비동기함수
const ex01 = function (param, callback) {
    //
    // 비동기 함수
    // 파일 시스템 접근, 네트워크 통신, SQL to DB, setTimer
    //

    setTimeout(function() {
        if (param === 'param-data') {
            callback(null, 'ok');
        } else {
            callback(new Error('fail'), null);
        }
    }, 2000);
}

// test01
// ex01이 $.ajax라고 생각하자.
ex01('param-data', function(error, res){
    
    if(error){
        // 에러가 있으면 에러 출력
        console.error(error);
    } else {
        console.log(res);
    }
});

console.log("wait........");
