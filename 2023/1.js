function findFirstRepeated(gifts) {
  const buffer = [];

  for (const gift of gifts) {
    if (buffer.includes(gift)) return gift;

    buffer.push(gift);
  }

  return -1;
}
