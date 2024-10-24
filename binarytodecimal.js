function binaryToDecimal(binary) {
  let answer = 0;
  const n = binary.length;
  for (let i = 0; i < n; i++) {
    if (binary[n - i - 1] === "1") {
      answer += Math.pow(2, i);
    }
  }
  return answer;
}

console.log(binaryToDecimal("10001"));

function decimalToBinary(decimal) {
  let answer = 0;
  let x = decimal;
  let y = decimal;
  while (y != 0) {}
}
