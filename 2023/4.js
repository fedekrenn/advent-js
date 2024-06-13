function decode(message) {
  const match = message.match(/\(([^()]+)\)/);

  if (!match) return message;

  const sanitized = match[0].slice(1, -1).split("").reverse().join("");

  const result = message.replace(match[0], sanitized);
  const recursive = decode(result);

  return recursive;
}
