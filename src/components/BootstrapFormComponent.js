import React, { Component } from 'react';

class BootstrapForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  render() {
    return (
      <form>
        <div className="input-group mb-3">
          <label for="subscriberEmail" className="sr-only">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="subscriberEmail"
            placeholder="Enter your email for updates on the launch."
          />
          <div className="input-group-append">
            <button class="btn btn-dark" type="button">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default BootstrapForm;
