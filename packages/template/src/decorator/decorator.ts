function Throttle(wait: number) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): void {
    const originalMethod = descriptor.value;
    let timer: any = null;

    descriptor.value = function (...args: any[]) {
      if (timer) {
        return;
      }
      timer = setTimeout(() => {
        originalMethod.apply(this, args);
        timer = null;
      }, wait);
    };
  };
}
function MinValue(min: number) {
  return function (target: any, propertyKey: string) {
    let value = target[propertyKey];

    const getter = () => value;
    const setter = (newVal: number) => {
      if (newVal < min) {
        console.log(`Value for ${propertyKey} should be at least ${min}`);
        value = min;
      } else {
        value = newVal;
      }
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}
function checkfood(
  target: any,
  propertyKey: string | symbol,
  parameterIndex: number
) {
  console.log(
    `Parameter at index ${parameterIndex} in method ${String(propertyKey)} of ${
      target.constructor.name
    }`
  );
}
@HighSchool()
class Person {
  @Throttle(3000)
  eat(@checkfood food: string = "apple") {
    console.log("eat", food);
  }
  constructor(options: any = {}) {
    this.name = options.name ?? "小明";
    this.age = options.age ?? 18;
  }
  name!: string;
  @MinValue(0)
  age!: number;

  @addEnd()
  get introduce() {
    return `my name is ${this.name}, I'm ${this.age} years old`;
  }
}
interface Person {
  school: string;
  identity: string;
}
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
function addEnd(target?: any) {
  return function (obj: any, key: string, descriptor: any) {
    const originalGet = descriptor.get;
    descriptor.get = function () {
      const result = originalGet?.apply(this);
      return `${result} - 谢谢大家`;
    };
  };
}

const highSchool = new Person();
const highSchool2 = new Person({ name: "小红", age: -1 });
console.log(highSchool2.age);
console.log(highSchool.introduce);
setInterval(() => {
  highSchool.eat();
}, 1000);
console.log(highSchool, highSchool.identity, highSchool.school);
export {};
