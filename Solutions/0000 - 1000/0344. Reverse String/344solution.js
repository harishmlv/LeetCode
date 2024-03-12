/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for(let i = 0, j = s.length - 1; i < j; ++i, --j)
    {
        [s[i],s[j]] = [s[j], s[i]];
    }
};

//2nd way to solve 
var reverseString = function(s) {
   let left = 0, right = s.length - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }
};
