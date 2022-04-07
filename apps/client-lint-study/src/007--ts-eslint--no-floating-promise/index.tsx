const myPromiseFactory = () =>
  new Promise<string>((rs, rj) => {
    const n = Math.random();
    n > 0.5 ? rs('yeah') : rj('oh snap');
  });

myPromiseFactory().then(
  (v): void => console.warn(v),
  (v): void => console.warn(v)
);

// This promise is floating b/c it is not handled:
myPromiseFactory();

// -----------------------------------
// Consider this very common example:
//
const sleep = (ms: number) => new Promise(rs => setTimeout(rs, ms));

(async () => {
  await sleep(1000);
  console.info('rise and shine');
})();

export {};
