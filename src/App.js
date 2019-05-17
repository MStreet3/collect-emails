import React from 'react';
import Main from './components/MainComponent';
import UnsubPage from './components/UnsubFormComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/collect-emails" component={Main} />
        <Route exact path="/unsubscribe" component={UnsubPage} />
        <Redirect to="/collect-emails" />
      </Switch>
    </div>
  );
}

export default App;
