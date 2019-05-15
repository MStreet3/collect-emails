import React from 'react';
import {
  Form,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Label
} from 'reactstrap';

function ReactStrapForm() {
  return (
    <Form>
      <InputGroup>
        <Label for="subscriberEmail1" hidden>
          Email
        </Label>
        <Input
          type="email"
          id="subscriberEmail1"
          placeholder="Enter your email for updates on the launch."
        />
        <InputGroupAddon addonType="append">
          <Button>Submit</Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );
}

export default ReactStrapForm;
