import maxLong from "../无重复的最长子串";
describe("无重复的最长子串", () => {
  it("1", () => {
    const s = "abcdefghijklmn";
    const num = maxLong(s);
    expect(num).toBe(s.length);
  });
  it("2", () => {
    const s = "ssss";
    const num = maxLong(s);
    expect(num).toBe(1);
  });
  it("3", () => {
    const s = "abac";
    const num = maxLong(s);
    expect(num).toBe(2);
  });
});
