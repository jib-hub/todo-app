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

export default PrimaryButton
