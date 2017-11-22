import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import About from './About';
import Fitness from './Fitness';
import Blogs from './Blogs';
import Projects from './Projects';
import Login from './Login';
import SinglePost from './SinglePost';
import Navigate from './Navigate';
import Home from './Home';
import Contact from './Comtact';


class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Projects} />
      	<Route path="/fitness" component={Fitness} />
        <Route path='/fitness/:title' component={SinglePost} />
        <Route path="/blogs" component={Blogs} />
        <Route path='/blogs/:title' component={SinglePost} />
        <Route path="/contact" component={Contact} />

      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
