const DestinationItem = props => {
  const {destinationsList} = props
  const {imgUrl} = destinationsList
  return (
    <div>
      <img src={imgUrl} />
    </div>
  )
}
export default DestinationItem
