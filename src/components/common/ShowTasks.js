import React from 'react';
import TaskContainer from '../containers/TaskContainer';
import Spacer from './Spacer'
import styled from 'styled-components';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import Heading2 from './Heading2';

const CustomCheckbox = withStyles({
  root: {
    color: 'darkgrey',
    '&$checked': {
      color: 'green',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
const FlexContainer = styled.div`
  display: flex;
`;
const Task = styled.div`
  padding: 11px 0 7px 0;
  position: relative;
  overflow: hidden;
  margin-left: 5px;
`;
const TaskLine = styled.div`
  transition: transform .5s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 2px;
  border-radius: 50%;
  background: green;
  transform: ${props => (props.show)? 'translateX(0%)' : 'translateX(-100%)'};
`;
const DeleteIcon = styled(DeleteForeverIcon)`
  margin-left: auto;
  fill: ${props => props.theme.danger} !important;
  padding: 9px;
  cursor: pointer;
  &:hover {
    fill: ${props => props.theme.dangerDarken} !important;
  }
`;
const Todo = ({todo, remove}) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <FlexContainer>
      <CustomCheckbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Task>{todo.text}, {todo.cat}<TaskLine show={checked} /></Task>
      <DeleteIcon onClick={() => { remove(todo.id); }} />
    </FlexContainer>);
  //return (<li>{todo.text}</li>);
}
const TodoList = ({todos, remove}) => {
  // Map through the todos
  const todoNode = todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id} remove={remove}/>)
  });
  return (todoNode);
}

class ShowTasks extends React.Component  {

  render(){
    return (
      <div>
      <Spacer />
      <Heading2>Tasks</Heading2>
      <TaskContainer>
      <TodoList
        todos={this.props.todos}
        remove={this.props.remove}
      />
      </TaskContainer>
      </div>
    );
  }

}
export default ShowTasks;
