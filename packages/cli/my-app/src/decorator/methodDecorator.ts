function Throttle(wait: number, options: any = {}) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): void {
    const originalMethod = descriptor.value;
    let timer: any = null;

    descriptor.value = function (...args: any[]) {
      if (timer) {
        options.waitFn && options.waitFn();
        return;
      }
      timer = setTimeout(() => {
        originalMethod.apply(this, args);
        timer = null;
      }, wait);
    };
  };
}

class Person {
  @Throttle(3000, {
    waitFn: () => {
      console.log("还不饿");
    },
  })
  eat(food: string = "apple") {
    console.log("eat", food);
  }
}
const highSchool = new Person();
setInterval(() => {
  highSchool.eat();
}, 1000);
export {};
