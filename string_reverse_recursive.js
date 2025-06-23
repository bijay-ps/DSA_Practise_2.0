const reverseString = (s) => {
  if (s.length === 0) return "";
  return reverseString(s.slice(1)) + s.charAt(0);
};
