import React from 'react';

import Component1 from '@myscope/ui--component-1';
import { fnInFoo1 } from '@myscope/util--foo-1';

import FontTest from 'src/font-test/';
import img from './react.png';
import s from './style.module.less';

const someString: string = fnInFoo1(23);

const App = () => (
  <div className={`${s.app}`}>
    <h1>Hello React</h1>
    <div>someString: {someString}</div>
    <div className={`${s.imageContainer}`}>
      <img src={img} alt="react" />
    </div>
    <Component1 />
    <FontTest />
  </div>
);

export default App;
