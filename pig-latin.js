const args = process.argv;
const pigLatin = function(strArr) {
  strArr = strArr.slice(2);
  let wordStr = '';
  for (let word of strArr) {
    word = `${word.slice(1)}${word.charAt(0)}ay`
      ;
    wordStr = `${wordStr} ${word}`;
  }
  console.log(wordStr.slice(1));
};
pigLatin(args);