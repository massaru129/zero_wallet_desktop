import React from 'react';
import ReactDom from 'react-dom';
const zerochain = require('zerochain');

const container = document.getElementById('contents');

ReactDom.render(
    <p>Hello, Zerochain? { zerochain.hoge()}</p>,
    container,
);
