import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

//pages for routing
import Landing from './pages/landing/Landing';
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import SingleBlog from './pages/blog/SingleBlog';
import Explained from './pages/explained/Explained';
import ExplainedPost from './pages/explained/ExplainedPost';

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
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/explained/post/:id',
    component: ExplainedPost,
  },
  {
    path: '/blog/:id',
    component: SingleBlog,
  }
]

export const Main = ({history}) => {
    return (
      <ConnectedRouter history={history}>
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
      </ConnectedRouter>
    );
  }
