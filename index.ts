export function isPangram(sentence: string): boolean {
  const alphabet = createMap()

  if (sentence.length < 26) {
    return false
  }

  for (const char of sentence.toUpperCase()) {
    if (alphabet.has(char)) {
      alphabet.delete(char)
    }
  }

  return alphabet.size === 0
}

const createMap = () => {
  const alphabet = new Map([
    ["A", "A"],
    ["B", "B"],
    ["C", "C"],
    ["D", "D"],
    ["E", "E"],
    ["F", "F"],
    ["G", "G"],
    ["H", "H"],
    ["I", "I"],
    ["J", "J"],
    ["K", "K"],
    ["L", "L"],
    ["M", "M"],
    ["N", "N"],
    ["O", "O"],
    ["P", "P"],
    ["R", "R"],
    ["S", "S"],
    ["T", "T"],
    ["U", "U"],
    ["V", "V"],
    ["W", "W"],
    ["X", "X"],
    ["Y", "Y"],
    ["Z", "Z"]
  ]);

  return alphabet;
}