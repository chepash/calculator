import { isNumberNext, isTrigonometryNext, doMath, getRang } from './utils.mjs';

export const calc = (inputString) => {
  // console.log("inputString : ", inputString);
  const tokenArray = inputString.match(/\d+(\.\d+)?|pi|sin|cos|tan|cot|[-+^*/()]/g);

  for (let i = 0; i < tokenArray.length; i++) {
    if (tokenArray[i] === 'pi') {
      tokenArray[i] = Math.PI;
    }
  }

  // console.log("tokenArray : ", tokenArray);

  let stackO = [];
  let stackN = [];

  for (let i = 0; i < tokenArray.length; i++) {
    const token = tokenArray[i];

    // order of IF is important
    if (token === ')') {
      // console.log("met :", tokenArray[i]);
      // console.log("stackO on ) before while: ", stackO);
      // console.log("stackN on ) before while: ", stackN);
      while (stackO.slice(-1)[0] !== '(') {
        doMath(stackN, stackO);
      }
      stackO.pop(); // pop "("

      // console.log("stackO on ) after while and pop'(': ", stackO);
      // console.log("stackN on ) after while and pop'(': ", stackN);
      continue;
    }

    if (!isNaN(parseFloat(token))) {
      stackN.push(parseFloat(token));
      continue;
    }

    // turn unary - or + into binary with 0
    if (
      (token === '-' || token === '+') &&
      (i === 0 || tokenArray[i - 1] === '(') &&
      isNumberNext(tokenArray, i)
    ) {
      stackN.push(0);
      stackO.push(token);
      stackN.push(parseFloat(tokenArray[i + 1]));
      i++;
      continue;
    }

    if (
      (token === '-' || token === '+') &&
      (i === 0 || tokenArray[i - 1] === '(') &&
      tokenArray[i + 1] === '('
    ) {
      stackN.push(0);
      stackO.push(token);
      continue;
    }

    if (
      (token === '-' || token === '+') &&
      (i === 0 || tokenArray[i - 1] === '(') &&
      isTrigonometryNext(tokenArray, i)
    ) {
      stackN.push(0);
      stackO.push(token);
      continue;
    }

    if (stackO.length === 0) {
      stackO.push(token);
      continue;
    }

    if (getRang(token) > getRang(stackO[stackO.length - 1])) {
      stackO.push(token);
      continue;
    }

    if (getRang(token) <= getRang(stackO[stackO.length - 1]) && token !== '(') {
      doMath(stackN, stackO);
      stackO.push(token);
      continue;
    }

    if (token === '(') {
      stackO.push(token);
      continue;
    }
  }

  // console.log("stackO : ", stackO);
  // console.log("stackN : ", stackN);

  while (stackO.length > 0) {
    doMath(stackN, stackO);
  }

  // console.log("in the end stackN : ", stackN);
  const result = parseFloat(stackN[0].toFixed(3));
  console.log('result : ', result);
  return result;
};
