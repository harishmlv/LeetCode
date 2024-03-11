/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s.length == 0) return 0;
    let array = s.trim().split(' ');
    return array[array.length-1].length
};

//2nd way to solve
let lengthOfLastWord = function(s) {
    let length = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            length++;
        } else if (length > 0) {
            break;
        }
    }
    return length;
};
