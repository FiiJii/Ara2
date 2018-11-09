import React from 'react';
import Header from '../components/header';
import StyledContainer from '../components/layouts/StyledContainer';
import StyledContent from '../components/layouts/StyledContent';

export default ({children, hideHeader, history, selectedOption}) => (
  <StyledContainer>
    {hideHeader ? '' : <Header history={history} selectedOption={selectedOption}/>}
    <StyledContent>
      {children}
    </StyledContent>
  </StyledContainer>
);
