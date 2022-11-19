import './index.css'

const Welcome = props => {
  const {name, greeting} = props
  return (
    <h1 className="message">
      {greeting}, {name}!
    </h1>
  )
}

//  Default Props
Welcome.defaultProps = {
  name: 'Rahul',
  greeting: 'Hello',
}

export default Welcome
