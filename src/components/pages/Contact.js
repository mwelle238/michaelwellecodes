import React, { useState, useRef, forwardRef } from 'react';
import { Form, Button, Schema, Input, useToaster, Notification } from 'rsuite';
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
  const [disableButton, setDisableButton] = useState(false);
  const formRef = useRef();
  const toaster = useToaster();

  const messageSuccess = (
    <Notification type='success' header="success" closeable >
      Message Sent Successfully
    </Notification>
  )
  const messageError = (
    <Notification type='error' header='error' closeable >
      Form Error, Message not Sent
    </Notification>
  )

  const sendMessage = async () => {
    setDisableButton(true);
    if (!formRef.current.check()) {
      console.error("Form Error");
      toaster.push(messageError, 'topCenter');
      return;
    }
    try {
      await emailjs.send('service_m3c0ks3', 'template_e7b7ctn', { ...formState }, 'GgW1A_KlVry9MPML6' );
      setFormState({
        name: "",
        email: "",
        message: "",
      });
      toaster.push(messageSuccess, 'topCenter');
    } catch (err) {
      console.error(err);
      toaster.push(messageError, 'topCenter');
    }
    setDisableButton(false);
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
            >
        <TextField name="name" label="Name"/>
        <TextField name="email" label="Email"/>
        <TextField name="message" label="Message" accepter={Textarea} rows={5}/>
        <Button appearance='primary' type ='submit' disabled={disableButton}>
          Send Message
        </Button>
      </Form>
    </div>
  );
}
