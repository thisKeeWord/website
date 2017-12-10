import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory } from 'react-router';
import { Route, NavLink, HashRouter, BrowserRouter, Switch } from 'react-router-dom';
import About from './About';
import BlogCategory from './BlogCategory';
import Blogs from './Blogs';
import Projects from './Projects';
import Login from './Login';
import SinglePost from './SinglePost';
import Navigate from './Navigate';
import Home from './Home';
import Contact from './Contact';
import Footers from './Footers';


//<Router history={browserHistory}>
        //<Route path="/" component={Footers}>
         // <Route path="/home" component={Home} />
          //<Route path="/about" component={About} />
          //<Route path="/portfolio" component={Projects} />
          //<Route path="/blog" component={Blogs} />
          //<Route path='/blog/:category' component={BlogCategory} />
          // <Route path='/blog/:category/:title' component={SinglePost} />
          // <Route path="/contact" component={Contact} />
        //</Route>

      //</Router>

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigate />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Projects} />
              <Route path="/blog" component={Blogs} />
              <Route path='/blog/:category' component={BlogCategory} />
              <Route path='/blog/:category/:title' component={SinglePost} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </main>
          <Footers />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
