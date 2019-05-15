import React from 'react';
import BootstrapForm from './components/BootstrapFormComponent';

function App() {
  return (
    <div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Email Collector</h1>
          <p class="lead">
            This is an app to collect emails and store them in Firebase.
          </p>
        </div>
      </div>

      <div className="container">
        <BootstrapForm />
      </div>
    </div>
  );
}

export default App;
