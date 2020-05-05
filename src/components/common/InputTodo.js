import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';

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
  width: ${props => (props.large)? '214px' : '92px'};
  margin-left: ${props => (props.large)? '0' : '2px'};
  color: ${props => props.theme.backgroundColorGradientEnd};
`;
const InputContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 404px;
`;
const InputContainerInner = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 404px;
`;

const InputTodo = ({addTodo}) => {
  // Input tracker
  let input;
  let input2;

  return (
    <InputContainer>
      <InputContainerInner>
      <Label htmlFor="input-add-todo">new Task</Label>
      <Input id="input-add-todo" name="input-add-todo" ref={node => {
        input = node;
      }} large />
      </InputContainerInner>
      <InputContainerInner>
      <Label htmlFor="input-add-todo-cat">Category</Label>
      <Input id="input-add-todo-cat" name="input-add-todo-cat" ref={node => {
        input2 = node;
      }} />
      </InputContainerInner>
      <PrimaryButton onClick={() => {
        addTodo(input.value, input2.value);
        input.value = '';
        input2.value = '';
      }}>ADD</PrimaryButton>
    </InputContainer>
  );
};

export default InputTodo
