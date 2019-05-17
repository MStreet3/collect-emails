import React from 'react';
import Main from './components/MainComponent';
import UnsubPage from './components/UnsubFormComponent';
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/collect-emails/unsubscribe" component={UnsubPage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
