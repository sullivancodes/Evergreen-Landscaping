import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navigation } from './Navigation';
import { Home } from './Home';
import { About } from './About';
import { Services } from './Services';
import { Portfolio } from './Portfolio';
import { Contact } from './Contact';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
        <Navigation />
        <Switch>
          
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
