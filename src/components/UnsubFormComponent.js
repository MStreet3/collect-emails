import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import rp from 'request-promise';

class UnsubForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.submitEmail = this.submitEmail.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  submitEmail() {
    const options = {
      method: 'POST',
      uri: 'https://crm.zoho.com/crm/Unsubscribe',
      encoding: 'UTF-8',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Upgrade-Insecure-Requests': 1
      },
      form: {
        xnQsjsdp:
          '471f3021ed654f3e4892f442fdd9c42e02dc17ac2d8e5198b73b2b5f87cee4fa',
        actionType: 'dW5zdWJzY3JpYmU=',
        returnURL: 'https://mstreet3.github.io/collect-emails/',
        email: this.state.email
      }
    };
    this.setState({
      email: ''
    });

    return rp(options)
      .then((response) => {
        console.log('Response went through!');
        console.log(`Response is: ${JSON.stringify(response)}`);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <form onSubmit={this.submitEmail}>
        <div className="input-group mb-3">
          <label htmlFor="unsubEmail" className="sr-only">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="unsubEmail"
            placeholder="Enter your email to unsubscribe from future updates..."
            onChange={this.onChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-danger"
              type="button"
              onClick={this.submitEmail}
            >
              Unsubscribe
            </button>
          </div>
        </div>

        <div className="form-group text-center">
          <Link to="/" className="btn btn-dark">
            Sign up
          </Link>
        </div>
      </form>
    );
  }
}

function UnsubPage() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Unsubscribe</h1>
          <p className="lead">
            Enter your details below to unsubscribe from future app updates.
          </p>
        </div>
      </div>

      <div className="container">
        <UnsubForm />
      </div>
    </div>
  );
}

export default UnsubPage;
