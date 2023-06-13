import React from 'react';
import { Form, Button, Schema, } from 'rsuite';
const { StringType } = Schema.Types;

const model = Schema.Model({
  name: StringType().isRequired('This field is required.'),
  email: StringType()
    .isEmail('Please enter a valid email address.')
    .isRequired('This field is required.'),
  message: StringType().isRequired('This field is required')
});

function TextField(props) {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-3`}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
}

export default function Contact() {
  return (
    <div className='p-3'>
      <h1>Contact Me</h1>
      <hr/>
      <Form model={model}>
        <TextField name="name" label="Name"/>
        <TextField name="email" label="Email"/>
        <TextField name="message" label="Message"/>
        <Button appearance='primary' type ='submit'>
          Send Message
        </Button>
      </Form>
    </div>
  );
}
