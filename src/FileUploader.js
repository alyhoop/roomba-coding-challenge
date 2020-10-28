import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import RoombaClean from './Roomba'

const style = {
  margin: '10% 30% 10% 30%',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '30px',
  borderWidth: 1,
  borderRadius: '20px',
  borderColor: '#bdbdbd',
  borderStyle: 'dashed',
  backgroundColor: '#eeeeee',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

function FileUploader({ productState, setProductState }) {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    const reader = new FileReader();

    reader.onload = () => {
      // JSON parse the result from read as text
      let parsed = JSON.parse(reader.result);
      // Call the setProductState function from Ancestor component
      setProductState(parsed);
    };

    // Read the file, triggering the onload event handler
    reader.readAsText(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps({ style })}>
      <input {...getInputProps()} value={productState} />
      <p>Drag files here, or click to browse</p>
    </div>
  );
}

export default FileUploader;
