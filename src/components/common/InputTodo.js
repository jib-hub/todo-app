import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

const PrimaryButton = styled(Button).attrs({
  color: 'primary'
})`
  background: ${props => props.theme.bg} !important;
  color: ${props => props.theme.backgroundColorGradientEnd} !important;
  border-color: ${props => props.theme.backgroundColorGradientEnd} !important;
  padding: 6px 8px 4px 8px !important;
  font-weight: 700 !important;
  font-size: 1rem !important;
  height: 56px;
  margin-left: -5px !important;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  &:hover{
    background: ${props => props.theme.bgDarken} !important;
  }
`;
const Label = styled.label`
  position: absolute;
  color: ${props => props.theme.textColor};
  top: -20px;
`;
const Input = styled.input`
  height: 56px;
  padding: 0;
  margin: 0;
  border: 0;
  padding-left: 15px;
  font-size: 18px;
  width: 348px;
  color: ${props => props.theme.backgroundColorGradientEnd};
`;
const InputContainer = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 404px;
`;

const InputTodo = ({addTodo}) => {
  // Input tracker
  let input;

  return (
    <InputContainer>
      <Label for="input-add-todo">new Task</Label>
      <Input name="input-add-todo" ref={node => {
        input = node;
      }} />
      <PrimaryButton onClick={() => {
        addTodo(input.value);
        input.value = '';
      }}>ADD</PrimaryButton>
    </InputContainer>
  );
};

export default InputTodo
