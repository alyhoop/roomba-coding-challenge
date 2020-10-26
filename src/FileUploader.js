import React, { useCallback, useState } from 'react'
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

function FileUploader() {

  const [state, setState] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload  = () => {
        const inputJson =
          JSON.parse(reader.result)

        console.log(inputJson)
        setState(inputJson);
      }

      reader.readAsText(file)
    })

  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps({style})}>
      <input {...getInputProps()} />
      <p>Drag files here, or click to browse</p>
    </div>
  )
}


export default FileUploader;
