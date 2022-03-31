[1, 2, 3].forEach(asyncCallback); // eslint-disable-line @typescript-eslint/no-misused-promises

asyncCallback(1); // eslint-disable-line @typescript-eslint/no-floating-promises
asyncCallback(2)
  .then(v => console.info('then: ', v))
  .catch(e => {
    console.error('error: ', e);
  });
void asyncCallback(3);

[1, 2, 3].forEach(v => {
  asyncCallback(v)
    .then(v => console.info('then: ', v))
    .catch(e => {
      console.error('error: ', e);
    });
});

[1, 2, 3].forEach(v => {
  void asyncCallback(v);
});

function callback(v: number) {
  const result = v;
  console.info('result', result);
}

async function asyncCallback(v: number) {
  const result = await Promise.resolve(v);
  console.info('result(ays)', result);
}

export { asyncCallback, callback };
