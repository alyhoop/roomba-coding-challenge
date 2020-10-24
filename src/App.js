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
 //accepts files
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload  = () => {
        const json = JSON.parse(reader.result)
        console.log(json)
        //takes file and translates
        const roombaRun = (json) => {
          let roomDimensions        = json.roomDimensions;
          let initialRoombaLocation = json.initialRoombaLocation;
          let dirtLocations         = json.dirtLocations;
          let drivingInstructions   = json.drivingInstructions;

          //runs roomba using directions within matrix core
          for (let i = 0; i < drivingInstructions.length; i++) {
            let count                   = 0;
            let wallHit                 = null;
            let roombaCurrentLocation   = null;
            let x                       = null;
            let y                       = null;

            //establishes matrix boundaries and adds them to wall hit count
            if (x === 0 || y === 0) {
              wallHit++;
            };

            //updates count for dirt locations when roomba arrives
            if (x && y === dirtLocations) {
              dirtLocations++;
            }

            //drives roomba
            switch(drivingInstructions) {
              case 'N':
                y++;
              break;
              case 'S':
                y--;
              break;
              case 'E':
                x++;
              break;
              case 'W':
                x--;
              break;
              default:
              return x & y;
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
