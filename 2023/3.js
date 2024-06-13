function findNaughtyStep(original, modified) {
  if (original === modified) return "";

  for (let i = 0; i <= modified.length; i++) {
    if (original[i] !== modified[i]) {
      return original.length > modified.length ? original[i] : modified[i];
    }
  }
}
