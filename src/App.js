import React, { useState } from 'react'
import FileUploader from './components/FileUploader'
import Table from './components/Table'
import Title from './components/Title'


const App = () => {
    const [products, setProducts] = useState({});
    return <>
      <Title />
      <FileUploader />
      <Table productState={products} />
    </>;
  }

export default App;
