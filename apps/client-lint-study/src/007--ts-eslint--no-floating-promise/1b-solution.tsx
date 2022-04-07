const myPromiseFactory = () =>
  new Promise<string>((rs, rj) => {
    const n = Math.random();
    n > 0.5 ? rs('yeah') : rj('oh snap');
  });

// This promise is not floating b/c it is handled:
myPromiseFactory().then(
  (v): void => console.warn(v),
  (v): void => console.warn(v)
);

export {};
