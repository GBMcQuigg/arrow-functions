const double = (val) => {
  return val * 2;
};

// const double = (arr) => arr.map((val) => val * 2);

const squareAndFindEvens = (nums) =>
  nums.map((n) => n ** 2).filter((square) => square % 2 === 0);
