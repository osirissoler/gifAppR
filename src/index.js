import React from 'react';
import ReactDOM from 'react-dom';
import GifExpertAPP from "./GifExpertAPP";

import './index.css'



const divRoot = document.querySelector('#root');

ReactDOM.render(

  <GifExpertAPP />,

  divRoot
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

