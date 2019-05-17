import React from 'react';
import Main from './components/MainComponent';
import UnsubPage from './components/UnsubFormComponent';
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <HashRouter basename="/collect-emails">
      <Switch>
        <Route exact path="/collect-emails" component={Main} />
        <Route exact path="/collect-emails/unsubscribe" component={UnsubPage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
