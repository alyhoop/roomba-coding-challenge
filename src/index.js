import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FileUploader from './FileUploader'
//import Table from './Table'
import Title from './Title'

ReactDOM.render(
  <React.StrictMode>
    <Title />
    <FileUploader />
  </React.StrictMode>,
  document.getElementById('root')
);
