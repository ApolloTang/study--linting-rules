// Consider this very common example:
// -----------------------------------
const sleep = (ms: number) => new Promise(rs => setTimeout(rs, ms));

void (async () => {
  await sleep(1000);
  console.info('rise and shine');
})();

export {};
