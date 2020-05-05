import React from 'react';
import styled from 'styled-components';

import PrimaryButton from './PrimaryButton';

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
