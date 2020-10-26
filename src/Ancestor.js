import React, { useState } from 'react'
import FileUploader from './FileUploader'
import Table from './Table'

const Ancestor = () => {
    const [products, setProducts] = useState({});
    return <>
      <FileUploader productState={products} setProductState={setProducts} />
      <Table productState={products} />
    </>;
  }

export default Ancestor;
