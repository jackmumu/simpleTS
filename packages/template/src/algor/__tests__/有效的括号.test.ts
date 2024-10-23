import validBracket from "../有效的括号";
describe("有效的括号", () => {
  it("1", () => {
    const flag = validBracket("{{}}");
    expect(flag).toBe(true);
    const flag2 = validBracket('<<>>(){}')
    expect(flag2).toBe(true)
  });
});
