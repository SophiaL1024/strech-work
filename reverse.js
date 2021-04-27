const args = process.argv;
let newStr = '';
const reverse = function(str) {
  for (let i = str[2].length - 1; i >= 0; i--) {
    newStr = newStr + str[2][i];
  }
  console.log(newStr);
};
reverse(args);
