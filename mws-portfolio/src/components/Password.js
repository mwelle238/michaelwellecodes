import React, { useState, useRef } from "react";
import { Button, Form, Input, InputNumber, Radio, RadioGroup } from 'rsuite';
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

export default function Password() {
    const [ password, setPassword ] = useState('generated password');
    const [ formData, setFormData ] = useState( { lowercase: 'A', uppercase: 'A', numbers: 'A', special: 'A', length: 16 })
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
    );
}