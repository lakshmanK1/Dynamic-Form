import React,{useState, useRef} from 'react'
import {v4 as uuidv4} from 'uuid'
import { MainDiv, FormDiv, Form, Label, Input, Button, Select, Option } from './StyledCmp'
import DataList from './DataList';

function FormData() {
const [formDataArr, setFormDataArr] = useState([{
  id:1, name:'Testing', email:'test@gmail.com', select:'M.TECH'
}]);

  const nameInput = useRef();
  const emailInput = useRef();
  const selectInput = useRef();

  const FormSubmit = (e) => {
    e.preventDefault();
    const enteredName = nameInput.current.value;
    const enteredEmail = emailInput.current.value;
    const enteredSelect = selectInput.current.value;

    const finalData = {
      id:uuidv4(),
      name:enteredName,
      email:enteredEmail,
      select:enteredSelect
    }

    setFormDataArr([finalData,...formDataArr]);

   }


  return (
    <MainDiv>
      <FormDiv>
        <Form onSubmit={FormSubmit}>
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
        <Button type='submit'>SUBMIT</Button>
        </Form>
        <DataList data={formDataArr}/>
      </FormDiv>
    </MainDiv>
  )
}

export default FormData