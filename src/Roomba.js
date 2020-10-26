import React from 'react'

function RoombaClean(roomDimensions, initialRoombaLocation, dirtLocations, drivingInstructions) {
  var width = roomDimensions[0]
  var length = roomDimensions[1]
  var dirtLocs = dirtLocations

  var output = [
    {
      step: 1,
      roombaLocation: initialRoombaLocation,
      action: '',
      totalDirtCollected: 0,
      totalWallHits: 0
    }
  ]

  for (var i = 0; i < drivingInstructions.length; i++) {
    var action = drivingInstructions[i]
    var status = output[i]
    var x = status.roombaLocation[0]
    var y = status.roombaLocation[1]
    var totalDirtCollected = status.totalDirtCollected
    var totalWallHits = status.totalWallHits

    switch(action) {
      case "N":
        if (y === length) {
          action = ''
          totalWallHits++
        } else {
          y++
        }
        break;
      case "E":
        if (x === width) {
          action = ''
          totalWallHits++
        } else {
          x++
        }
        break;
      case "S":
        if (y === 0) {
          action = ''
          totalWallHits++
        } else {
          y--
        }
        break;
      case "W":
        if (x === 0) {
          action = ''
          totalWallHits++
        } else {
          x--
        }
        // no default
    }

    var incrementedTotalDirtCollected = false

    for (var j = 0; j < dirtLocs.length; j++) {
      var k = dirtLocs.length - j - 1
      var loc = dirtLocs[k]

      if (x === loc[0] && y === loc[1]) {
        if (!incrementedTotalDirtCollected) {
          incrementedTotalDirtCollected = true
          totalDirtCollected++
        }

        dirtLocs.splice(k, 1)
      }
    }

    output.push(
      {
        step: (i + 2),
        roombaLocation: [x, y],
        action: action,
        totalDirtCollected: totalDirtCollected,
        totalWallHits: totalWallHits
      }
    )
  }

  return output
}

// RoombaClean(json.roomDimensions, json.initialRoombaLocation, json.dirtLocations, json.drivingInstructions)

export default RoombaClean;
