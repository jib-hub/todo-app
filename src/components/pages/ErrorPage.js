import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '../containers/Wrapper'
import PrimaryButton from '../common/PrimaryButton';
import Heading2 from '../common/Heading2';

const PrimaryButton2 = styled(PrimaryButton).attrs({
  color: 'primary'
})`
  border-top-left-radius: 4px !important;
  border-bottom-left-radius: 4px !important;
`;
const Heading2_2 = styled(Heading2)`
  text-align: center;
  margin: 30px auto;
  font-size: 3rem;
`;
class Error extends React.Component {
    render(){
      return (
      <>
      <Wrapper width="boxed">
      <Heading2_2>ERROR 404</Heading2_2>
      </Wrapper>
      <Wrapper width="boxed">
      <Link to ={{ pathname: "/" }} ><PrimaryButton2>Back to Start</PrimaryButton2></Link>
      </Wrapper>
      </>
      )
    }
};


export default Error;
