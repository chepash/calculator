export const operator = {
  '+': { rang: 1, calc: (a, b) => a + b },
  '-': { rang: 1, calc: (a, b) => b - a },
  '*': { rang: 2, calc: (a, b) => a * b },
  '/': { rang: 2, calc: (a, b) => b / a },
  '^': { rang: 3, calc: (a, b) => b ** a },
  sin: {
    rang: 4,
    calc: (a) => {
      const res = Math.sin(a);
      if (Math.abs(res) < Number.EPSILON) {
        return 0;
      }
      return res;
    },
  },
  cos: {
    rang: 4,
    calc: (a) => {
      const res = Math.cos(a);
      if (Math.abs(res) < Number.EPSILON) {
        return 0;
      }
      return res;
    },
  },
  tan: {
    rang: 4,
    calc: (a) => {
      const res = Math.tan(a);
      if (Math.abs(res) < Number.EPSILON) {
        return 0;
      }
      return res;
    },
  },
  cot: { rang: 4, calc: (a) => 1 / operator.tan.calc(a) },

  '(': { rang: 0, calc: undefined },
};

export const isNumberNext = (tokenArray, i) => !isNaN(parseFloat(tokenArray[i + 1]));

export const isTrigonometryNext = (tokenArray, i) => {
  const trigonometry = ['sin', 'cos', 'tan', 'cot'];
  return trigonometry.includes(tokenArray[i + 1]);
};

export const doMath = (stackN, stackO) => {
  const op = stackO.pop();
  const a = stackN.pop();
  // console.log("op : ", op);
  // console.log("a : ", a);

  if (op === 'sin' || op === 'cos' || op === 'tan' || op === 'cot') {
    const result = operator[op].calc(a);
    // console.log("result of", op, " = ", result);
    stackN.push(result);
    return;
  }

  const b = stackN.pop();

  const result = operator[op].calc(a, b);
  // console.log("result NOT trig: ", result);
  stackN.push(result);
};

export const getRang = (token) => operator[token].rang;
