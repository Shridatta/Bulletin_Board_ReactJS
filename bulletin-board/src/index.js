import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Note from './note.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Note />, document.getElementById('root'));
registerServiceWorker();
