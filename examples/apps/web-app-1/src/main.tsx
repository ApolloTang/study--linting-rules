import '~/main.less';

import React from 'react';
import ReactDom from 'react-dom';

import App from '~/app';
import fonts from '~/common/fonts/index.js';

fonts.loadFonts();
const appContainer = document.getElementById('app-container');
ReactDom.render(<App />, appContainer);
