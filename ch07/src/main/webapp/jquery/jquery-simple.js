// 간단 jQuery 만들기

var jQuery = function(param) {
	// 함수 만들기
	if (typeof (param) === 'function') {
		window.addEventListener('load', param);
		return;
	}

	if (typeof (param) === 'string') {
		var elements = document.querySelectorAll(param);
		return new __jQuery(elements);
	}
}

var __jQuery = function(elements) {
	this.length = elements.length;
	for (var i = 0; i < elements.length; i++) {
		this["" + i] = elements[i];
	}
}

// jqeury 를 부르면 현재 버전을 출력
__jQuery.prototype.jquery = 'jquery.simple.0.0.1';

// 파라미터로는 상수(핸들러)가 들어옴
// 이벤트 이름은 click
__jQuery.prototype.click = function(handler) {
	for (var i = 0; i < this.length; i++) {
		this[i].addEventListener('click', handler);
	}
}

// 파라미터로는 상수(핸들러)가 들어옴
// 이벤트 이름은 css
__jQuery.prototype.css = function(name, value) {
	for (var i = 0; i < this.length; i++) {
		this[i].style[name] = value;
	}
}

// 파라미터로는 index가 들어옴
// 이벤트 이름은 get
__jQuery.prototype.get = function(index) {
	for (var i = 0; i < this.length; i++) {
		return this[index];
	}
}

var $ = jQuery;