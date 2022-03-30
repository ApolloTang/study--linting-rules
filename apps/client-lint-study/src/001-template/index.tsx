import React from 'react';
import img from './react.png';
import s from './style.module.less';

/* eslint-disable-next-line */
console.log('asfd');

// @ts-expect-error example usage @ts-expeceted-error
const foo:string = 1

const App = () => (
  <div className={`${s.app}`}>
    <h1>Hello React</h1>
    <div className={`${s.imageContainer}`}>
      <img src={img} alt="react" />
    </div>
  </div>
);

export default App;
