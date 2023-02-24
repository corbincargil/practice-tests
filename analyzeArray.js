export default function analyzeArray(arr) {
  const average = (arr) => {
    const sum = arr.reduce((total, num) => {
      return total + num;
    }, 0);
    return sum / arr.length;
  };

  const min = (arr) => {
    return Math.min(...arr);
  };

  const max = (arr) => {
    return Math.max(...arr);
  };

  const length = (arr) => {
    return arr.length;
  };

  const results = {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    length: length(arr),
  };
  return results;
}
