import React from 'react';
import BootstrapForm from './BootstrapFormComponent';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Email Collector</h1>
          <p className="lead">
            This is an app to collect emails and store them in Zoho CRM.
          </p>
        </div>
      </div>

      <div className="container">
        <BootstrapForm />
      </div>

      <div className="form-group text-center">
        <Link to="/unsubscribe" className="btn btn-danger">
          Unsubscribe
        </Link>
      </div>
    </div>
  );
}
