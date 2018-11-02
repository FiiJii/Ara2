import React from 'react';
import styled from 'styled-components';

export default styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  margin: 20px 0;
  text-align: center;
`;
