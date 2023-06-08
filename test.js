import { calc } from './calculator.mjs';

const tests = [
  { input: '2+3', estimatedResult: 5 },
  { input: '5*4', estimatedResult: 20 },
  { input: '10-6', estimatedResult: 4 },
  { input: '8/2', estimatedResult: 4 },
  { input: '2^3', estimatedResult: 8 },
  { input: 'sin(0)', estimatedResult: 0 },
  { input: 'cos(pi/2)', estimatedResult: 0 },
  { input: 'tan(pi/4)', estimatedResult: 1 },
  { input: 'cot(pi/4)', estimatedResult: 1 },
  { input: '(3+4)*2', estimatedResult: 14 },
  { input: 'sin(pi/6)*2', estimatedResult: 1 },
  { input: '2*(cos(pi)+1)', estimatedResult: 0 },
  { input: 'tan(pi/3)-1', estimatedResult: 0.732 },
  { input: 'cot(pi/4)+1', estimatedResult: 2 },
  { input: '5^2+3*4', estimatedResult: 37 },
  { input: 'sin(pi/4)*cos(pi/4)', estimatedResult: 0.5 },
  { input: 'sin(0)^2+cos(0)^2', estimatedResult: 1 },
  { input: '(2+3)*sin(pi/6)', estimatedResult: 2.5 },
  { input: 'cot(0)', estimatedResult: Infinity },
  { input: '4^(1+1)', estimatedResult: 16 },
];

function runTests() {
  let passed = 0;
  let failed = 0;

  for (let i = 0; i < tests.length; i++) {
    const { input, estimatedResult } = tests[i];
    const result = calc(input);

    if (
      (result == Infinity && estimatedResult == Infinity) ||
      (result == -Infinity && estimatedResult == -Infinity)
    ) {
      console.log(`Test ${i + 1}: PASSED`);
      passed++;
      continue;
    }

    if (Math.abs(result - estimatedResult) < Number.EPSILON) {
      console.log(`Test ${i + 1}: PASSED`);
      passed++;
    } else {
      console.log(`Test ${i + 1}: FAILED. Expected: ${estimatedResult}, Got: ${result}`);
      failed++;
    }
  }

  console.log(`\nTotal tests: ${tests.length}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
}

runTests();
