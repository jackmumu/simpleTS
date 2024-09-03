interface Person {
  school: string;
  identity: string;
}
@HighSchool()
class Person {}
type optionsType = {
  identity?: string;
  school?: string;
};
function HighSchool(options: optionsType = {}) {
  return function (target: any) {
    target.prototype.identity =
      options.identity ?? "senior high school student";
    target.prototype.school = options.school ?? "北京市第三中学";
  };
}
const p = new Person();
console.log(p.identity);
console.log(p.school);
export {};
