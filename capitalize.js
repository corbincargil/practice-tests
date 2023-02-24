export default function capitalize(str) {
  if (str.length > 0) {
    const newStr = str
      .trim()
      .split(" ")
      .map((word) => {
        const splitWord = word.split("");
        const newLetter = splitWord[0].toUpperCase();
        splitWord.splice(0, 1);
        splitWord.unshift(newLetter);
        return splitWord.join("").concat(" ");
      })
      .join("");
    return newStr.trim();
  } else return str;
}

capitalize("hello, john.");
