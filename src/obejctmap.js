{ Object.entries(productState)
  .map((item, i) => (
  <tr key={productState.step}>
    <td>{productState.step}</td>
    <td>{productState.roombaLocation}</td>
    <td>{productState.action}</td>
    <td>{productState.totalDirtCollected}</td>
    <td>{productState.totalWallHits}</td>
  </tr>
))}
