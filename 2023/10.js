function createChristmasTree(ornaments, height) {
  let tree = "";
  let index = 0;

  for (let i = 0; i < height; i++) {
    const createArr = () => ornaments[index++ % ornaments.length];
    const ornamentos = Array.from({ length: i + 1 }, createArr);

    tree += `${ornamentos.join(" ").padStart(height + i)}\n`;
  }

  const lastChar = `${" ".repeat(height - 1)}|\n`;

  return (tree += lastChar);
}
