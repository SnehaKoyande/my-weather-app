import React, { Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Summary from './containers/Summary/Summary';
import Hourly from './containers/Hourly/Hourly';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/:day' component={Hourly} />
          <Route path='/' exact component={Summary} />
        </Switch>
        
      </div>
    );
  };
  
};


export default App;
