import React from 'react';
import styled from 'styled-components';

const SwitchInput = styled.input`
  height: 0;
  opacity: 0;
  width: 0;
`;

const SwitchLabel = styled.label`
  display: inline-block;
  height: 30px;
  left: 0;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
`;

const SwitchSpan = styled.span`
  background-color: #${props => props.checked ? '64C0EA' : 'ccc'};
  border-radius: ${props => props.rounded ? '30px' : '0'};
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  -webkit-transition: .4s;
  transition: .4s;

  &:before {
    background-color: white;
    border-radius: ${props => props.rounded ? '50%' : '0'};
    bottom: 4px;
    content: "";
    height: 22px;
    left: 7px;
    position: absolute;
    -webkit-transition: .4s;
    transition: .4s;
    width: 22px;
  }

  input:focus + & {
    box-shadow: 0 0 1px #64C0EA;
  }

  input:checked + &:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

export default (props) => (
  <SwitchLabel>
    <SwitchInput type="checkbox" {...props}/>
    <SwitchSpan {...props}/>
  </SwitchLabel>
);
