const myPromiseFactory = () =>
  new Promise<string>((rs, rj) => {
    const n = Math.random();
    n > 0.5 ? rs('yeah') : rj('oh snap');
  });

// This promise is floating:
myPromiseFactory();

export {};
