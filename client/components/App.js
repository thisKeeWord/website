import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Nav from './Nav';
import Fitness from './Fitness';
import Blogs from './Blogs';
import Projects from './Projects';
import Login from './Login';
// import Misc from './Misc';


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
        <Route path="/" component={Nav} />
      	<Route path="/fitness" component={Fitness} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/projects" component={Projects} />
        <Route path="/login" component={Login} />
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('content'));
