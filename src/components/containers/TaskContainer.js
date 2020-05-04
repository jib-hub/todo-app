import styled from 'styled-components';

const TaskContainer = styled.div`
  background: ${props => props.theme.bg} !important;
  color: ${props => props.theme.backgroundColorGradientEnd} !important;
  width: 364px;
  padding: 20px;
  margin: 0 auto;
`;

export default TaskContainer
