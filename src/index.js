import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
const encabezado = React.createElement(
    'h1',
    { className: 'titulo' },
    'Hola, colega!'
);