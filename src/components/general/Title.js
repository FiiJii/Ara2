import React from 'react';
import Opacity from './Opacity';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledH1 = styled.h1`
  color: white;
  font-family: 'Montserrat';
  font-size: ${props => props.mediumFont ? '18pt' : '28pt'};
  font-weight: 800;
  margin-left: ${props => props.centered ? '0' : '50px'};
  text-align: ${props => props.centered ? 'center' : 'left'};
  text-transform: ${props => props.textTransform ? props.textTransform : 'none'};

  & a {
    color: white;
    text-decoration: none;
  }

  & p {
    margin: 0;
  }
`;

const StyledSpan = styled.span`
  font-weight: 300;
`;

export default ({link, opacity, thinText, thickText, ...props}) => {
  let content = (
    <p><StyledSpan>{thinText}</StyledSpan> {thickText}</p>
  );

  if (link) {
    content = (
      <Link to={link}>{content}</Link>
    );
  }

  if (opacity) {
    content = (
      <Opacity>{content}</Opacity>
    );
  }

  return (
    <StyledH1 {...props}>
      {content}
    </StyledH1>
  );
}
