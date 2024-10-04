

const ListGroup = (props) => {
  const { children, cx } = props
  return (
    <ul className={`list-group list-group-flush ${cx ? `list-group-${cx}` : ''} rounded`}>
      {children}
    </ul>
  )
}
export default ListGroup;