import fetch from 'node-fetch';

const response = await fetch('https://httpbin.org/post', {
  method: 'post',
  body: JSON.stringify({ data: 'data' }),
  headers: { 'Content-Type': 'application/json' },
});
const data1 = await response.json();
const data2 = await response.json();

export { data1, data2 };
