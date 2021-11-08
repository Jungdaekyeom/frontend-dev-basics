/**
 * 
 * Array 확장(prototype 기반의 확장) : List 메소드 추가
 * 
 */

// 두 개의 리스트 메소드 추가
Array.prototype.insert = function(index, value){
    if(value instanceof Array){ // 어레이면 스플라이스 후 삽입
        
        // 방법 1
        // for(var i = 0; i < value.length; i++){
        //     this.splice(index, 0, value[i]);
        //     index++;
        // }
        
        // 방법 2
        // 콜백 안에서의 this를 주의해야 한다.
        // 범위가 바뀌는 것을 "클로저"`라 한다.
        // var _this = this;
        // value.forEach(function(e){ // value를 기준으로 반복
        //     _this.splice(index++, 0, e);
        // });

        // 방법 3 : bind 사용
        // value.forEach(function(e){
        //     this.splice(index++, 0, e);
        // }.bind(this));                

    } else {
        this.splice(index, 0, value); // 어레이가 아니면 그냥 삽입
    }
}

Array.prototype.remove = function(index, value){
    this.splice(index, 1);
}

// List로 사용하기
var a = [1,2,4];
console.log(a);

a.insert(2,3);
console.log(a);

a.remove(3);
console.log(a);

a.insert(2, ['a','b','c']); // 기대: [1, 2, 'a', 'b', 'c', 3]
console.log(a);             // 결과: [1, 2, ['a', 'b', 'c'], 3] => 따라서 insert 함수에 if문 포함시킴

var f = function(param){
    console.log(this.name + " : " + param);
}

// f();
var o = {name: "pocpoc0202"}
// call
f.call(o, "pocpoc0202@naver.com");
// apply
f.apply(o);