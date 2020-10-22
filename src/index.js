module.exports = function reverse (n) {
  let newNumber = String(Math.abs(n)).split('').reverse().join('');
  return Number(newNumber);
};
