import React, {
  useCallback } from 'react'
import {useDropzone} from 'react-dropzone'

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

function App() {

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload  = () => {
        const json = JSON.parse(reader.result)
        console.log(json)

        const roombaRun = (json) => {
          let initialRoombaLocation = json.initialRoombaLocation;
          let dirtLocations         = json.dirtLocations;
          let drivingInstructions   = json.drivingInstructions;
          let x                     = json.roomDimensions[0];
          let y                     = json.roomDimensions[1];
          let i                     = 0;

          for (i = initialRoombaLocation; i < drivingInstructions.length; i++) {


            let count                   = 0;
            let wallHitCount            = 0;
            let wallHit                 = 'placeholder';
            let roombaCurrentLocation   = 'x,y placeholder';

            if (dirtLocations) {
              dirtLocations++;
            }

            if (wallHit) {
              wallHitCount++;
            }

            switch(json.drivingInstructions) {
              case 'N':
                y -= 1
              break;
              case 'S':
                y += 1
              break;
              case 'E':
                x += 1
              break;
              case 'W':
                x -= 1
              break;
              default:
            };
        }

        };

        roombaRun(json)
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

export default App;
