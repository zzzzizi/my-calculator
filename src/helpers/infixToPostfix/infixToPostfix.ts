function prec(c: string) {
  if (c === '/' || c === '*') return 2;
  else if (c === '+' || c === '-') return 1;
  else return -1;
}

export const infixToPostfix = (s: Array<string>) => {
  let st = [];
  let result = [];

  for (let i = 0; i < s.length; i++) {
    let c = s[i];

    if (!isNaN(parseFloat(c))) {
      result.push(c);
    } else if (c === '(') {
      st.push('(');
    } else if (c === ')') {
      while (st[st.length - 1] !== '(') {
        result.push(st[st.length - 1]);
        st.pop();
      }
      st.pop();
    }

    //If an operator is scanned test pr
    else {
      while (st.length !== 0 && prec(s[i]) <= prec(st[st.length - 1])) {
        result.push(st[st.length - 1]);
        st.pop();
      }
      st.push(c);
    }
  }

  // Pop all the remaining elements from the stack
  while (st.length !== 0) {
    result.push(st[st.length - 1]);
    st.pop();
  }

  return result;
};
