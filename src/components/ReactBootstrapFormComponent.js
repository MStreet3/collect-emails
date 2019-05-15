import React from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function ReactBootstrapForm() {
  return (
    <div>
      <h1>React-Bootstrap Form</h1>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter your email for updates on the launch."
          aria-label="Email"
        />
        <InputGroup.Append>
          <Button variant="dark">Submit</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export default ReactBootstrapForm;
