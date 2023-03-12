import React,{useState, useRef} from 'react'
import { MainDiv, FormDiv, Form, Label, Input, Button, Select, Option } from './StyledCmp'

function FormData() {
const [formData, setFormData] = useState([]);

  const nameInput = useRef();
  const emailInput = useRef();
  const selectInput = useRef();

  const FormSubmit = (e) => {
    e.preventDefault();
    const enteredName = nameInput.current.value;
    const enteredEmail = emailInput.current.value;
    const enteredSelect = selectInput.current.value;

    
  }

  return (
    <MainDiv>
      <FormDiv>
        <Form>
        <Label>Full name : </Label><br/>
        <Input type='text' placeholder='kamisetti lakshman' ref={nameInput}/><br/>
        <Label>Email Id : </Label><br/>
        <Input type='email' placeholder='abc@gmail.com' ref={emailInput}/><br/>
        <Label>Highest Qualification : </Label><br/>
        <Select ref={selectInput}>
          <Option>Select</Option>
          <Option>B.SC</Option>
          <Option>B.TECH/B.E</Option>
          <Option>M.TECH</Option>
        </Select><br/>
        <Button>SUBMIT</Button>
        </Form>
      </FormDiv>
    </MainDiv>
  )
}

export default FormData