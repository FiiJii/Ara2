import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

const StyledLoader = styled.div`
  padding: 150px 0;
  text-align: center;
`;

export default () => (
  <StyledLoader>
    <CircularProgress size={50} />
  </StyledLoader>
);
