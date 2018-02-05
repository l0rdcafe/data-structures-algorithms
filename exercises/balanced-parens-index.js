function isBalanced(string) {
  const stack = [];
  let secondParenPos;
  const openParenIndex = string.indexOf("(");

  if (openParenIndex < 0) {
    return -1;
  }

  for (let i = openParenIndex + 1; i < string.length; i += 1) {
    if (string.indexOf(")") < 0) {
      secondParenPos = string.length;
    } else {
      secondParenPos = string.indexOf(")");
    }
  }
  stack.push(openParenIndex);
  stack.push(secondParenPos);
  return stack.pop();
}

console.log(isBalanced("2.3 + 23 / 12 + (3.14159 * .24"));
