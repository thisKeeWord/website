import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import About from './About';
import BlogCategory from './BlogCategory';
import Blogs from './Blogs';
import Projects from './Projects';
import Login from './Login';
import SinglePost from './SinglePost';
import Navigate from './Navigate';
import Home from './Home';
import Contact from './Contact';


class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Projects} />
        <Route path="/blogs" component={Blogs} />
        <Route path='/blogs/:category' component={BlogCategory} />
        <Route path='/blogs/:category/:title' component={SinglePost} />
        <Route path="/contact" component={Contact} />

      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
