const ex02 = function(param){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(param === 'param-data'){
                resolve('ok');
            } else {
                reject(new Error('fail'));
            }
        }, 2000);
    });
}

// 자신이 메인이면
if(require.main == module){
    // test01: success
    ex02('param-data').then(function(res){
        console.log(res);
    });

    // test02: fail
    ex02('param-data').catch(function(error){
        console.error(error);
    });
    // 일반적으로....
    // ex02('....')
    // .then(res => {

    // })
    // .catch(err => {

    // });

    console.log('wait..........');
} else { // 자기가 메인이 아니고, 다른 곳으로 끌려간 경우
    module.exports = ex02;
}
