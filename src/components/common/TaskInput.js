import { TextField } from '@material-ui/core';
import styled from 'styled-components';

const TaskInput = styled(TextField).attrs({
  id:"input-task", label:"Task", type:"search", variant:"outlined"
})`
  background: ${props => props.theme.bg} !important;
  color: ${props => props.theme.backgroundColorGradientEnd} !important;
  width: 300px;
  * {
    border-color: ${props => props.theme.bg} !important;
    color: ${props => props.theme.backgroundColorGradientEnd} !important;
  }
`;

export default TaskInput
