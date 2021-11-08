/**
 * URL 다루기
 * 
 */

var url1 = "http://www.mysite.com/user?name=둘리&no=10";

// 1. escape : URL을 전부 encoding(쓰지 마세요!) deprecated
var url2 = escape(url1);
console.log(url2); // 이상하게 됨

// 2. encodeURI : parameter 부분만 encoding
var url3 = encodeURI(url1);
console.log(url3);

// 3. encodeURIComponent : 값만 encoding 해야 하는 경우
var url4 = encodeURIComponent(url1); // 좋지 못한 사용 예(url을 다 때려서 쓰는게 아님!)
console.log(url4);

// 만들어야 할 URL
// http://mysite.com/user?no=10&name=둘리&email=pocpoc0202@naver.com

var toQueryString = function(o){
    var qs = [];
    for(prop in o){
        qs.push(prop + "=" + o[prop]);
    }

    return qs.join("&");

    console.log(qs);
}

var url = "http://mysite.com/user";
var params = {
    name:'둘리',
    no:10,
    email:'pocpoc0202@naver.com'
}

var url5 = url + "?" + toQueryString(params);
console.log(url5);

// $.ajax({
//     url:url,
//     type:'post',
//     dataType:'application/json',
//     data:'no=10&name=둘리&email=pocpoc0202@naver.com' toQueryString(params)
// })