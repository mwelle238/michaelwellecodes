import React, { useState, useRef } from "react";
import { Button, Form, Input, InputNumber, Radio, RadioGroup } from 'rsuite';
import { Modal } from 'rsuite';
import {SchemaModel, StringType, NumberType } from "schema-typed";

const model = SchemaModel({
    lowercase: StringType().isRequired("Selection Required"),
    uppercase: StringType().isRequired("Selection Required"),
    numbers: StringType().isRequired("Selection Required"),
    special: StringType().isRequired("Selection Required"),
    length: NumberType().isRequired("Selection Required"),
});

const scramble = (str) => {
    let scramble = '';
    let rand = '';
    while(str.length > 0){
        rand = Math.floor(Math.random()*str.length);
        scramble += str.charAt(rand);
        str = str.substring(0, rand) + str.substring(rand + 1)
    }
    return scramble;
}

const styles = {
    cardHeader: {
        backgroundColor:"#36454F",
        color: 'yellow',
    },
    link: {
        textDecoration:"none",
        color:"yellow"
    },
    image: {
        aspectRatio:"3/2"
    }
}

export default function Password() {
    const [ password, setPassword ] = useState('generated password');
    const [ formData, setFormData ] = useState( { lowercase: 'A', uppercase: 'A', numbers: 'A', special: 'A', length: 16 })
    const [ open, setOpen ] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const formRef = useRef();

    const generatePassword = ()=> {
        console.log(formData);
        const lowers = 'abcdefghijklmnopqrstuvwxyz';
        const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
        const specialChars = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
        let pwd = '';
        // generate allowed characters string
        let allowedChars = '';
        if (formData.lowercase !== 'F') 
            allowedChars += lowers;
        if (formData.uppercase !== 'F')
            allowedChars += uppers;
        if (formData.numbers !== 'F') 
            allowedChars += nums;
        if (formData.special !== 'F')
            allowedChars += specialChars;
        console.log(allowedChars);
        // adding required characters
        if (formData.lowercase === 'R')
            pwd += lowers.charAt(Math.floor(Math.random()*lowers.length));
        if (formData.uppercase === 'R')
            pwd += uppers.charAt(Math.floor(Math.random()*uppers.length));
        if (formData.numbers === 'R')
            pwd += nums.charAt(Math.floor(Math.random()*nums.length));
        if (formData.special === 'R')
            pwd += specialChars.charAt(Math.floor(Math.random()*specialChars.length));
        // fill the rest of the string
        while(pwd.length < formData.length){
            pwd += allowedChars.charAt(Math.floor(Math.random()*allowedChars.length));
        }
        setPassword(scramble(pwd));   
    }


    return (
        <div className='d-flex flex-row flex-wrap justify-content-between container-fluid'>
            <div className='col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-2' onClick={(handleOpen)}>
                <div className='card card-header' style={styles.cardHeader}>
                    <h2>Password Generator</h2>
                </div>
                <img className='card-img-top' src='tech-image-6.jpg' alt="Tech" style={styles.image}/>
                <div className='card card-footer' style={styles.cardHeader}>
                    <p>A simple password generator.</p>                
                </div>         
            </div>
        <Modal open={open} onClose={handleClose}>
            <Modal.Header>
                <Modal.Title><h1>Mike's Password Generator</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form 
                    ref={formRef}
                    model={model}
                    formValue={formData}
                    onChange={formValue => setFormData(formValue)}
                    >
                        <label>Lowercase Letters:</label>
                        <Form.Control name='lowercase' accepter={RadioGroup} inline>
                            <Radio value="R">Required</Radio>
                            <Radio value="A">Allowed</Radio>
                            <Radio value="F">Forbidden</Radio>
                        </Form.Control>
                        <label>Uppercase Letters:</label>
                        <Form.Control name='uppercase' accepter={RadioGroup} inline>
                            <Radio value="R">Required</Radio>
                            <Radio value="A">Allowed</Radio>
                            <Radio value="F">Forbidden</Radio>
                        </Form.Control>
                        <label>Numbers:</label>
                        <Form.Control name='numbers' accepter={RadioGroup} inline>
                            <Radio value="R">Required</Radio>
                            <Radio value="A">Allowed</Radio>
                            <Radio value="F">Forbidden</Radio>
                        </Form.Control>
                        <label>Special Characters:</label>
                        <Form.Control name='special' accepter={RadioGroup} inline>
                            <Radio value="R">Required</Radio>
                            <Radio value="A">Allowed</Radio>
                            <Radio value="F">Forbidden</Radio>
                        </Form.Control>
                        <label>Password Length</label>
                        <Form.Control name='length' max={128} min={8} accepter={InputNumber}/>
                        <label>Generated Password:</label>
                        <Form.Control disabled name='password' value={password} accepter={Input}/>
                    <Button onClick={generatePassword}>Generate Password</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose} appearance="primary">
                    Close
                </Button>
            </Modal.Footer>
      </Modal>
    </div>
    );
}