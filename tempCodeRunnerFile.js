function reverseString(str) {
    const stack = [];
    const reversedString = [];
      for (let i = 0; i < str.length; i++) {
      stack.push(str[i]);
    }
    while (stack.length > 0) {
      reversedString.push(stack.pop());
    }
    return reversedString.join('');
  }
console.log(reverseString("razal"))