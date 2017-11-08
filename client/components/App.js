import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import About from './About';
import Fitness from './Fitness';
import Blogs from './Blogs';
import Projects from './Projects';
import Login from './Login';
import SinglePost from './SinglePost';
import Nav from './Nav';


// function loggedIn() {
//   // ...
// }

// function requireAuth(nextState, replace) {
//   if (!loggedIn()) {
//     replace({
//       pathname: '/login'
//     })
//   }
// }
          // <Route path="/misc" component={Misc} />
          // <Route path="/login" component={Login} />



class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={About} />
      	<Route path="/fitness" component={Fitness} />
        <Route path='/fitness/:title' component={SinglePost} />
        <Route path="/blogs" component={Blogs} />
        <Route path='/blogs/:title' component={SinglePost} />
        <Route path="/projects" component={Projects} />
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
