// 1.
// unnamed export 모듈에서 대상을 하나 import 할 때는 이름을 지정해야 한다.

import myFunction from './ex08.01.mjs';
import myObject from './ex08.02.mjs';

console.log(myFunction(10, 20));
console.log(myObject.add(30, 40));
console.log(myObject.substract(30, 40));


// 2.
// named export는 import대상이 다수가 될 수 없으므로, 하나의 특정 이름으로 받을 수 없다.
// 대신 * as ~ 를 사용한다.
// 
// import m from './ex08.03.mjs';
import * as m from './ex08.03.mjs';

// 많이 쓰는 문법은 아님
console.log(m.add(10, 20));
console.log(m.substract(10, 20));


// 3. 해당 부분이 지금 현재 리액트에서 쓰는 것
import {substract} from './ex08.04.mjs';

console.log('이 부분을 현재 리액트에서 사용 : ' + substract(20, 10));

// 4.
import math, {add} from './ex08.05.mjs';
console.log(math.substract(20, 10), add(10, 20));