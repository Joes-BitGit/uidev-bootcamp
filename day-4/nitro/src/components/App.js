import React, { Component } from 'react';
import Home from './Home';
import Topics from './Topics';
import About from './About';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              {/* Instead of using anchor tag use the React: Link tag */}
              <li><Link to='/'>HOME</Link></li>
              <li><Link to='/about'>ABOUT</Link></li>
              <li><Link to='/topics'>TOPICS</Link></li>
            </ul>
          </nav>
          <hr />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/topics' component={Topics} />

        </div>
      </BrowserRouter>
    )
  }
}

export default App;
