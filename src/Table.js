import React from 'react'

function Table({ productState }) {
  return (
    <div>
      <table className="table">
        <thead>
        <tr>
          <th>Step</th>
          <th>Roomba Location</th>
          <th>Action</th>
          <th>Total Dirt Collected</th>
          <th>Total Wall Hits</th>
        </tr>
        </thead>
        <tbody>
            {
              //skfjksfj i am a placeholder
            }
        </tbody>
      </table>
      <h4>Final Position: {}</h4>
      <h4>Total Dirt Collected: {}</h4>
      <h4>Total Distance Traveled: {}</h4>
      <h4>Total Walls Hit: {}</h4>
    </div>
  )
}

export default Table
