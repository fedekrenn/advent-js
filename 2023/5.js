const road = "S..|...|..";
const time = 10; // unidades de tiempo
cyberReindeer(road, time);

function cyberReindeer(road, time) {
  const buffer = [road];
  let lastChar = ".";

  for (let i = 1; i < time; i++) {
    if (i === 5) {
      road = road.replaceAll("|", "*");
    }

    const roadArray = road.split("");
    const santaIndex = roadArray.indexOf("S");
    const nextIndex = santaIndex + 1;
    const nextChar = roadArray[nextIndex];

    if (nextChar === "." || nextChar === "*") {
      roadArray[nextIndex] = "S";
      roadArray[santaIndex] = lastChar;
      lastChar = nextChar;
    }

    road = roadArray.join("");
    buffer.push(road);
  }

  return buffer;
}
