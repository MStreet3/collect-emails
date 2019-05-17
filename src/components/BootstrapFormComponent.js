import React, { Component } from 'react';
import rp from 'request-promise';

class BootstrapForm extends Component {
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
      encoding: 'UTF-8',
      method: 'POST',
      uri: 'https://crm.zoho.com/crm/WebToLeadForm',
      headers: {
        'Content-Type': 'x-www-form-urlencoded'
      },
      form: {
        xnQsjsdp:
          '6894d049cf0933024c1dbe585181e58e70b9a23da40771969ba1745ae7c8f1fd',
        zc_gad: '',
        xmIwtLD:
          '41fe22b1c8549ef266e82589846ecb9cf957a70ecda827906e23352f7d4e41fc',
        actionType: 'TGVhZHM=',
        returnURL: 'https://mstreet3.github.io/collect-emails',
        Company: 'PreLaunchSignUp',
        'Last Name': 'web2LeadForm',
        Email: this.state.email
      }
    };

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
          <label htmlFor="subscriberEmail" className="sr-only">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="subscriberEmail"
            placeholder="Enter your email for updates on the launch."
            onChange={this.onChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-dark"
              type="button"
              onClick={this.submitEmail}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default BootstrapForm;
