function manufacture(gifts, materials) {
  return gifts.filter((gift) => {
    return [...gift].every((char) => {
      return materials.includes(char);
    });
  });
}
