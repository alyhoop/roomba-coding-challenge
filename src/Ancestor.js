import React, { useState } from 'react'
import PropTypes from 'prop-types';
import FileUploader from './FileUploader'
import Table from './Table'


const Ancestor = () => {
    const [products, setProducts] = useState({});
    return <>
      <FileUploader productState={products} setProductState={setProducts} />
      <Table productState={products} />
    </>;
  }

  Ancestor.propTypes = {
    productState: PropTypes.object,
    setProductState: PropTypes.object
};

export default Ancestor;
