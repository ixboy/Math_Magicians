import './App.css';

import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import Calculator from './components/Calculator';
import Home from './components/pages/Home';
import Navbar from './components/pages/Navbar';
import Quote from './components/pages/Quote';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Route path="/calculator" component={Calculator}>
          <div className="randomDiv">
            <h3> Mathematics is a hard thing to love, let&apos;s do some Maths.</h3>
          </div>
          <Calculator />
        </Route>
        <Route path="/quote" component={Quote}>
          <Quote />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
