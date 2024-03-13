var commonChars = function(words) {
  let pointer = words[0].split('');   // ["b", "e", "l", "l", "a"]
  for(let i = 1; i< words.length; i++)
  {
    let tempChar = words[i].split(''); // tempChar = ["r", "o", "l", "l", "e", "r"]
    pointer = pointer.filter( char => {
      let ind = tempChar.indexOf(char);
      return ind != -1 ? tempChar[ind] = true : false
    }) 
  }
  return pointer;
};
// 1. char = "b", ind = -1 , can't find in tempChar, so pointer [false, "e", "l", "l", "a"]  false not return in array so is ["e", "l", "l", "a"]
// 2. char = "e", ind = 4, pointer = ["e", "l", "l", "a"], tempChar = ["r", "o", "l", "l", true, "r"]
// 3. char = "l", ind = 2, pointer = ["e", "l", "l", "a"], tempChar = ["r", "o", true, "l", true, "r"]
// 4. char = "l", ind = 3, pointer = ["e", "l", "l", "a"], tempChar = ["r", "o", true, true, true, "r"]
// 5. char = "a", ind = -1, pointer = ["e", "l", "l"], tempChar = ["r", "o", true, true, true, "r"]
