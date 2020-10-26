import React from 'react'

function Table() {
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
