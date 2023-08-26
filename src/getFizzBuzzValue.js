export const getFizzBuzzValue = (count) => {
  if (count === 0) {
    return "Start";
  }
  if (count % 15 === 0) {
    return "FizzBuzz";
  }
  if (count % 3 === 0) {
    return "Fizz";
  }
  if (count % 5 === 0) {
    return "Buzz";
  }
  return count;
};
