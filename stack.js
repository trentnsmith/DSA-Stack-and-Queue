class _Node {
    constructor (value, next) {
      this.value = value;
      this.next = next;
    };
  };
  
  class Stack {
    constructor () {
      this.top = null;
    };
  
    push (data) {
      this.top = new _Node (data, this.top);
    };
  
    pop () {
      const topNode = this.top;
      if (topNode === null) return;
      this.top = topNode.next;
      return topNode.value;
    };
  };
  
const starTrek = new Stack();

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

function peek (stack) {
    if (!stack.top) return null;
    return stack.top.value;
};
  
function isEmpty (stack) {
    return (stack.top === null);
};
  
function display (stack) {
    let currNode = stack.top;
    if (currNode === null) console.log('empty stack');
    while (currNode.next !== null) {
      console.log(currNode.value);
      currNode = currNode.next;
    };
    console.log(currNode.value);
};

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let palindromeStack = new Stack();
    let splitString = s.split('');
    let stackLength = splitString.length;
    let forwardResults = '';
    splitString.forEach(char => palindromeStack.push(char));
    for (let i = stackLength; i > 0; i--) {
      forwardResults += palindromeStack.pop()
    };
    return s === forwardResults
};

function matchingParentheses(str) {
    const stack = new Stack();
    if (!str) {
        return null;
    };
    for(let i=0; i < str.length; i++) {
      if(str[i] === '(') {
        stack.push(str[i]);
      };
      if(str[i]===')') {
        if (stack.pop() === null);
          return false;
      };
    };
    return(stack.top===null);
  };

function sortStack(stack) {
    if(!stack.top.next) {
        return stack;
    }
    display(stack);
    let sortStack = new Stack();
    while(stack.top) {
      let temp = stack.pop();
      while(sortStack.top && sortStack.top.data > temp) {
        stack.push(sortStack.pop());
      };
      console.log(sortStack);
      sortStack.push(temp);
    };
    display(sortStack);
    return sortStack;
};