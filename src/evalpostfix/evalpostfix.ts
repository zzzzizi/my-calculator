export const evalpostfix = (expression: Array<string>) => {
  const st: Array<number> = [];

  for (let i = 0; i < expression.length; i++) {
    let a = expression[i];
    console.log(st);

    if (a === '+') {
      st.push((st.pop() ?? 0) + (st?.pop() ?? 0));
    } else if (a === '-') {
      let b = st.pop();
      let c = st.pop();
      st.push((c ?? 0) - (b ?? 0));
    } else if (a === '*') {
      st.push((st?.pop() ?? 0) * (st?.pop() ?? 0));
    } else if (a === '/') {
      let b = st.pop();
      let c = st.pop();
      st.push((c ?? 0) / (b ?? 1));
    } else {
      st.push(parseFloat(a));
    }
  }
  return Number(st.pop()?.toPrecision(12));
};
