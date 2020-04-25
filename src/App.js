import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

// Components
import Home from './components/pages/Home';
import Start from './components/settings/Start';
import Question from './components/questions/Question';
import Summary from './components/summary/Summary';

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <div className='container h-100vh all-center'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/start' component={Start} />
            <Route exact path='/questions' component={Question} />
            <Route exact path='/summary' component={Summary} />
          </Switch>
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
