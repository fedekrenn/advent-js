function organizeGifts(gifts) {
  const matches = gifts.match(/(\d*\w)/g);

  const buffer = [];

  for (let match of matches) {
    let count = Number(match.slice(0, -1));
    let gift = match.at(-1);

    const palets = Math.floor(count / 50);
    count -= palets * 50;
    const boxes = Math.floor(count / 10);
    count -= boxes * 10;

    const formatPalets = `[${gift}]`.repeat(palets);
    const formatBoxes = `{${gift}}`.repeat(boxes);
    const formatBags = count > 0 ? `(${gift.repeat(count)})` : "";

    const result = `${formatPalets}${formatBoxes}${formatBags}`;

    buffer.push(result);
  }

  return buffer.join("");
}
