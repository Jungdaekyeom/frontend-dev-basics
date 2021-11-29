/**
* named export & unamed export
* 
*/


const add = function(a, b) {
    return a + b;
};

const substract = function(a, b) {
    return a - b;
}

export {add, substract};
export default {add, substract};