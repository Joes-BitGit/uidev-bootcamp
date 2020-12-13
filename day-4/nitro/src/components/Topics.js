import React from 'react'
import {
  Link,
  Route
} from 'react-router-dom'

function Topic(props) {
  console.log(props);
  // match is a property of props 
  return <h3>{props.match.params.topicId}</h3>
}

function Topics(props) {
  return (
    <div>
      <h1>Hello Topics!</h1>
      <ol>
        {/* match.url is the full url */}
        <li><Link to={`${props.match.url}/rendering`}>Rendering in React</Link></li>
        <li><Link to={`${props.match.url}/components`}>Components</Link></li>
        <li><Link to={`${props.match.url}/props-v-state`}>Props vs. State</Link></li>
      </ol>

      <hr />


      {/* When the path is a certain name route to these location */}
      {/* match.path has the dynaimc portion */}
      <Route path={`${props.match.path}/:topicId`} component={Topic} />
      {/* Want to pass props to your components? */}
      {/* Use the render fucntion */}
      {/* <Route path='' render={() => {
        return <Component anyprops={this.anyprops} />
      }} />*/}

      <Route exact path={`${props.match.path}`} render={() => {
        return <h3>Please Select a Topic</h3>
      }} />

    </div>

  )
}

export default Topics