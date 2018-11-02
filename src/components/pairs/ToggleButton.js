import React from 'react';
import styled from 'styled-components';

export default styled.button`
  background-color: ${props => props.color};
  border: none;
  border-radius: 15px;
  height: 10px;
  width: 10px;
`;
