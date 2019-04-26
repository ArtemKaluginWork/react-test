import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


import Header from './components/Header';

const About = lazy(() => import('./views/About'));
const Home = lazy(() => import('./views/Home'));
const UserPage = lazy(() => new Promise((resolve) => {
  setTimeout(() => resolve(import('./views/UserPage')), 1000);
}));
const TestingGround = lazy(() => import('./views/TestingGround'));
const LoadingMessage = () => (
  'Loading...'
);

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Suspense fallback={<LoadingMessage />}>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route exact path="/user-page" component={UserPage} />
          <Route exact path="/testing" component={TestingGround} />
          <Route component={() => <div>404</div>} />
        </Switch>
      </Suspense>
    </Router>
  </div>
);

export default App;
