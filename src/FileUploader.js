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
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onload  = () => {
        const inputJson =
          JSON.parse(reader.result)
           setProductState(inputJson);
        }
      reader.readAsText(file)
    })

  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps({style})}>
      <input {...getInputProps()} value={productState}/>
      <p>Drag files here, or click to browse</p>
    </div>
  )
}


export default FileUploader;
