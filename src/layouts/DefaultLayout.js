import React, { Component } from 'react';
import Header from '../components/header';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1400px;
  padding: 20px 15px;
  width: 100%;
`;

export default ({children, history}) => (
  <div>
    <Header history={history}/>
    <StyledContainer>
      {children}
    </StyledContainer>
  </div>
);
