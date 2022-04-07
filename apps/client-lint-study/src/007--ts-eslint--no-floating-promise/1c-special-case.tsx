// Consider this very common example:
// -----------------------------------
const sleep = (ms: number) => new Promise(rs => setTimeout(rs, ms));

(async () => {
  await sleep(1000);
  console.info('rise and shine');
})();

export {};
