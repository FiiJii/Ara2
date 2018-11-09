import React from 'react';
import StyledOption from './StyledOption';
import Opacity from '../general/Opacity';
import { Link } from "react-router-dom";

export default ({opacity, route, text, ...props}) => {
  let content = text;

  if (opacity) {
    content = (
      <Opacity>{content}</Opacity>
    );
  }

  return (
    <StyledOption {...props}>
      <Link to={`/${route}`}>{content}</Link>
    </StyledOption>
  );
}
