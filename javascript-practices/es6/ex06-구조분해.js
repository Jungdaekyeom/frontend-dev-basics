/**
 * 6. 구조 분해
 */

// ex1 - basic
const user = {
    firstName: '대',
    lastName: '겸',
    email: 'pocpoc0202@naver.com'
};

({firstName, lastName, email} = user);
// firstName = user.firstName;
// lastName = user.lastName;

f = function({firstName, lastName}){}

console.log(firstName, lastName, email);
console.log(user);