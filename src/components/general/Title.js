import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  color: white;
  font-family: 'Montserrat';
  font-size: 28pt;
  font-weight: 800;
  text-align: center;
`;

const StyledSpan = styled.span`
  font-weight: 300;
`;

export default ({thinText, thickText, ...props}) => (
  <StyledH1 {...props}>
    <StyledSpan>{thinText}</StyledSpan> {thickText}
  </StyledH1>
);
