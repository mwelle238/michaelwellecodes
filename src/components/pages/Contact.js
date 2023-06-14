import React, { useState, useRef, forwardRef } from 'react';
import { Form, Button, Schema, Input } from 'rsuite';
import emailjs from '@emailjs/browser';

const { StringType } = Schema.Types;
const Textarea = forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

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
    <Form.Group controlId={name}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
}

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  //const [formError, setFormError] = useState({});
  const formRef = useRef();

  const sendMessage = async () => {
    if (!formRef.current.check()) {
      console.error("Form Error");
      return;
    }
    try {
      const data = await emailjs.send('service_m3c0ks3', 'template_e7b7ctn', { ...formState }, 'GgW1A_KlVry9MPML6' );
      console.log(data);
      setFormState({
        name: "",
        email: "",
        message: "",
      });
      alert("Message Sent");  //change this to a modal and notification.
    } catch (err) {
      console.error(err);
      return;
    }
  }
  return (
    <div className='p-3'>
      <h1>Contact Me</h1>
      <hr/>
      <Form model={model} 
            id='contact-form' 
            ref={formRef}
            formValue={formState}
            onSubmit={sendMessage}
            onChange={setFormState}
            onCheck={setFormError}
            >
        <TextField name="name" label="Name"/>
        <TextField name="email" label="Email"/>
        <TextField name="message" label="Message" accepter={Textarea} rows={5}/>
        <Button appearance='primary' type ='submit'>
          Send Message
        </Button>
      </Form>
    </div>
  );
}
