import myPromise from "../promise";
describe("promise", () => {
  it("promise", () => {
    const promise = new myPromise((resolve, reject) => {
      resolve(1);
    });
    promise.then((value: any) => {
      expect(value).toBe(1);
    });
  });
  it("promise", () => {
    const promise = new myPromise((resolve, reject) => {
      reject(1);
    });
    promise.then(
      () => {},
      (value: any) => {
        expect(value).toBe(1);
      }
    );
  });
});
