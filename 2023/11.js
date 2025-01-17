function getIndexsForPalindrome(word) {
  const checkPalindrome = (word) => word === word.split("").reverse().join("");

  const swap = (word, start, end) => {
    const palabra = word.split("");

    [palabra[start], palabra[end]] = [palabra[end], palabra[start]];

    return palabra.join("");
  };

  if (checkPalindrome(word)) return [];

  for (let start = 0; start < word.length; start++) {
    for (let end = 0; end < word.length; end++) {
      if (checkPalindrome(swap(word, start, end))) return [start, end];
    }
  }

  return null;
}
