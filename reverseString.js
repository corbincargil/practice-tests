export default function reverseString(str) {
  return str.length !== 0 ? str.split("").reverse().join("") : str;
}
