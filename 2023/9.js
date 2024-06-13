function adjustLights(lights) {
  let replacements = 0;
  let invertedReplacements = 0;

  let nextShouldBe = lights[0] === "🟢" ? "🔴" : "🟢";

  for (let i = 1; i < lights.length; i++) {
    if (lights[i] !== nextShouldBe) replacements++;
    nextShouldBe = nextShouldBe === "🟢" ? "🔴" : "🟢";
  }

  for (let i = lights.length - 1; i >= 0; i--) {
    if (lights[i] !== nextShouldBe) invertedReplacements++;
    nextShouldBe = nextShouldBe === "🟢" ? "🔴" : "🟢";
  }

  return replacements < invertedReplacements ? replacements : invertedReplacements;
}
