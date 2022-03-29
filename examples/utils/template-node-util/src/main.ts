import someJson from './bar/foo/somejson.json';

const main = () => {
  const { someNum } = someJson;

  return someNum.toString();
};

// let foo = 123;
// foo = null;

export default main;
