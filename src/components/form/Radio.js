import React from 'react';
import styled from 'styled-components';

const RadioLabel = styled.label`
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  font-weight: 400;
  position: relative;
  vertical-align: middle;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export default ({label, ...props}) => (
  <RadioLabel>
    <input
      type="radio"
      {...props}
    /> <span>{label}</span>
  </RadioLabel>
);
