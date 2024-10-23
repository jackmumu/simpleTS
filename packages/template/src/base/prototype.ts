Vue.prototype._init = function (options?: Object) {};

function Vue(options?: Object) {
  console.log("Vue");
  this._init(options);
}
const v = new Vue();
console.log(((window as any).v = v));
export {};
