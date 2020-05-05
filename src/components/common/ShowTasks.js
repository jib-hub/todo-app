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
  position: relative;
  padding-top: ${props => (props.paddingTop)? '20px' : '0'}
`;
const Seperator = styled.div`
  width: 100%;
  height: 1px;
  background: lightgrey;
  position: absolute;
`;
const Task = styled.div`
  padding: 11px 0 7px 0;
  position: relative;
  overflow: hidden;
  margin-left: 5px;
  display: flex;
  width: 100%;
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
const TaskCat = styled.div`
  color: grey;
  position: absolute;
  right: 0;
`;
const CatContainer = styled.div`

`;
const HeadingCat = styled.div`
	position: absolute;
	transform: translateY(-100%);
  color: #999;
`;
const Todo = ({todo, remove, newCat}) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <FlexContainer paddingTop={newCat} >
      {(newCat) && <CatContainer><HeadingCat>{todo.cat}</HeadingCat><Seperator /></CatContainer>}
      <CustomCheckbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Task>{todo.text}<TaskCat>{todo.cat}</TaskCat><TaskLine show={checked} /></Task>
      <DeleteIcon onClick={() => { remove(todo.id); }} />
    </FlexContainer>);
}

const TodoList = ({todos, remove}) => {

  todos.sort((a, b) => (a.cat > b.cat) ? 1 : -1);
  let lastCat = '';
  const todoNode = todos.map((todo) => {
    let trigger = false;
    if (lastCat !== todo.cat) {trigger = true;}
    lastCat = todo.cat;
    let node = <Todo newCat={trigger} todo={todo} key={todo.id} remove={remove}/>;
    return (node)

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
