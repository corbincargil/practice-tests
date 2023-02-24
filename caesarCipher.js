export default function caesarCipher(str) {
  return str
    .trim()
    .toLowerCase()
    .split("")
    .map((letter) => swap(letter))
    .join("");
}

function swap(letter) {
  switch (letter) {
    case "a":
      return "c";
    case "b":
      return "d";
    case "c":
      return "e";
    case "d":
      return "f";
    case "e":
      return "g";
    case "f":
      return "h";
    case "g":
      return "i";
    case "h":
      return "j";
    case "i":
      return "k";
    case "j":
      return "l";
    case "k":
      return "m";
    case "l":
      return "n";
    case "m":
      return "o";
    case "n":
      return "p";
    case "o":
      return "q";
    case "p":
      return "r";
    case "q":
      return "s";
    case "r":
      return "t";
    case "s":
      return "u";
    case "t":
      return "v";
    case "u":
      return "w";
    case "v":
      return "x";
    case "w":
      return "y";
    case "x":
      return "z";
    case "y":
      return "a";
    case "z":
      return "b";
    case " ":
      return " ";
    case ".":
      return ".";
    case ",":
      return ",";
    case "!":
      return "!";
    case "?":
      return "?";
    case "/":
      return "/";
    case ":":
      return ":";
    case ";":
      return ";";
    case '"':
      return '"';
    case "'":
      return "'";
    case "-":
      return "-";
    default:
      break;
  }
}
