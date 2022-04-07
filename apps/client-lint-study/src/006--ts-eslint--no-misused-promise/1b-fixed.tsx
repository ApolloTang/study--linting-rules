const asyncCallback = async (v: number) => {
  const result = await Promise.resolve(v);
  console.info(result);
};

[1, 2, 3].forEach((v: number) => {
  asyncCallback(v).then(
    v => console.info(v),
    v => console.info(v)
  );
});

[1, 2, 3].forEach((v: number) => {
  void asyncCallback(v);
});

export {};
