export const handleObject = (
  obj: object,
  key: string,
  setCallback: () => void = () => ({}),
  getCallback: () => void = () => ({})
) => {
  Object.defineProperty(obj, key, {
    writable: true,
    configurable: true,
    enumerable: true,
    set: setCallback,
    get: getCallback
  });
};

type IArrayMethod = 'push' | 'pop' | 'shift' | 'unshift' | 'splice' | 'sort' | 'reverse' | 'all';
export const hookArray = (
  arr: Array<any>,
  method: IArrayMethod,
  callback: (args: any, index: number, method: IArrayMethod) => void = () => ({})
) => {
  const arrExtend = Object.create(Array.prototype);
  const hookFun = (m: IArrayMethod) => {
    const oldMethod = Array.prototype[m as any];
    arrExtend[m] = function (args: any) {
      const index = oldMethod.apply(this, [ args ]);
      callback(args, index, m);
    };
    // @ts-ignore
    arr.__proto__ = arrExtend;
  };

  if (method !== 'all') {
    hookFun(method);
  } else {
    [
      'push',
      'pop',
      'shift',
      'unshift',
      'splice',
      'sort',
      'reverse'
    ].forEach((method: IArrayMethod) => {
      hookFun(method);
    });
  }
};

export const calculatedSize = (str: string): number => {
  const blob = new Blob([ str ]);
  return Math.floor(blob.size / 1024 / 1024);
};
