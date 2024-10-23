export default function validBracket(s: string) {
  const stack: Array<string> = [];
  const m = new Map([
    ["}", "{"],
    [">", "<"],
    [")", "("],
  ]);
  for (let i = 0; i < s.length; i++) {
    if (m.get(s[i])) {
      if (!stack.length || stack.pop() != m.get(s[i])) {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }
  return !stack.length;
}
