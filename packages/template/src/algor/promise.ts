class myPromise {
  onRejectedCallbacks: Array<Function> = [];
  onResolvedCallbacks: Array<Function> = [];
  status = "pending";
  value = undefined;
  reason = undefined;
  constructor(executor: (resolve: any, reject: any) => void) {
    const resolve = (value: any) => {
      if (this.status === "pending") {
        this.value = value;
        this.status = "resolved";
        this.onResolvedCallbacks.forEach((fn) => fn(value));
      }
    };
    const reject = (reason: any) => {
      if (this.status === "pending") {
        this.reason = reason;
        this.status = "rejected";
        this.onRejectedCallbacks.forEach((fn) => fn(reason));
      }
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      console.log(error);
    }
  }
  then(onFulfilled?: Function, onRejected?: Function) {
    if (this.status === "resolved") {
      onFulfilled && onFulfilled(this.value);
    }
    if (this.status === "rejected") {
      onRejected && onRejected(this.reason);
    }
    if (this.status === "pending") {
      onFulfilled && this.onResolvedCallbacks.push(onFulfilled);
      onRejected && this.onRejectedCallbacks.push(onRejected);
    }
  }
}
export default myPromise;
