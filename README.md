# Calculator.js

A simple calculator program implemented in JavaScript. The calculator can perform basic arithmetic operations and evaluate trigonometric expressions.

## Usage

To use the calculator, you need to include the `calculator.mjs` file in your project. The `calc` function can be called with an input string representing a mathematical expression. The function will return the calculated result.

Example usage:

```javascript
import { calc } from './calculator.mjs';

const result = calc('2+3'); // Returns 5
console.log(result);
```

## Supported Operations

The calculator supports the following

- Addition: `+`
- Subtraction: `-`
- Multiplication: `*`
- Division: `/`
- Exponentiation: `^`
- Trigonometric functions:
  - Sine: `sin`
  - Cosine: `cos`
  - Tangent: `tan`
  - Cotangent: `cot`

## Examples

Here are some example expressions that the calculator can evaluate:

- `2+3` evaluates to 5
- `5*4` evaluates to 20
- `10-6` evaluates to 4
- `8/2` evaluates to 4
- `2^3` evaluates to 8
- `sin(0)` evaluates to 0
- `cos(pi/2)` evaluates to 0
- `tan(pi/4)` evaluates to 1
- `cot(pi/4)` evaluates to 1
- `(3+4)*2` evaluates to 14

Feel free to modify and use this calculator in your own projects!
