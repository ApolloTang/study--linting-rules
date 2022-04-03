import fetch from 'node-fetch';

const response = await fetch('https://httpbin.org/post', {
  method: 'post',
  body: JSON.stringify({ data: 'data' }),
  headers: { 'Content-Type': 'application/json' },
});
const data = await response.json();

export { data };
