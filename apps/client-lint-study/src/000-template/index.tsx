import React from 'react';
import img from './react.png';
import s from './style.module.less';

console.log('asfd');

const foo: string = 1;

const App = () => (
  <div className={`${s.app}`}>
    <h1>Hello React</h1>
    <div className={`${s.imageContainer}`}>
      <img src={img} alt="react" />
    </div>
  </div>
);

export default App;
