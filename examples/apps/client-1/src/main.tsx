import 'src/main.less';

import React from 'react';
import ReactDom from 'react-dom';

import App from 'src/app';
import fonts from 'src/common/fonts/index.js';

fonts.loadFonts();
const appContainer = document.getElementById('app-container');
ReactDom.render(<App />, appContainer);
