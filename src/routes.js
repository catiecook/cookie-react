import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//pages for routing
import Landing from './pages/landing/Landing';
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import Resume from './pages/about/Resume';
// import Contact from './pages/contact/Contact';
import YouCanCode from './pages/blog/YouCanCode';
import Explained from './pages/explained/Explained';
// import ExplainedPost from './pages/explained/ExplainedPost';
import Randomizer from './pages/explained/Randomizer';

const routes = [
  {
    path: '/',
    component: Landing
  },
  {
    path: '/explained',
    component: Explained,
  },
  {
    path: '/blog',
    component: Blog,
  },
  // {
  //   path: '/contact',
  //   component: Contact,
  // },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/resume',
    component: Resume,
  },
  {
    path: '/explained/post/randomizer',
    component: Randomizer,
  },
  {
    path: '/blog/youcancode',
    component: YouCanCode,
  }
]

class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact path={route.path}
              component={route.component}
            />
          ))}
        </div>
      </Router>
    );
  };
}

export default Main;
