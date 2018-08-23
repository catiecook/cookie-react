import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//pages for routing
import Landing from './pages/landing/Landing';
import About from './pages/about/About';
import Resume from './pages/about/Resume';
// import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';
import HowIGotHere from './pages/blog/HowIGotHere';
import Randomizer from './pages/blog/Randomizer';

const routes = [
  {
    path: '/',
    component: Landing
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/resume',
    component: Resume
  },
  {
    path: '/blog/randomizer',
    component: Randomizer
  },
  {
    path: '/blog/howigothere',
    component: HowIGotHere
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
