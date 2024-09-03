class Person {
  _money: number = 100;
  @logAccess()
  get money() {
    return this._money;
  }
  set money(value: number) {
    this._money = value;
  }
}
function logAccess() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalGet = descriptor.get;
    const originalSet = descriptor.set;

    if (originalGet) {
      descriptor.get = function () {
        console.log(`Getting value of ${propertyKey}`);
        return originalGet.apply(this);
      };
    }

    if (originalSet) {
      descriptor.set = function (value: any) {
        console.log(`Setting value of ${propertyKey} to ${value}`);
        originalSet.apply(this, [value]);
      };
    }
  };
}
const highSchool = new Person();
const getMoney = highSchool.money;
highSchool.money = 50;
export {};
