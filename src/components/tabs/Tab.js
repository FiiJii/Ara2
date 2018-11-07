import React from 'react';
import styled from 'styled-components';

const StyledTab = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: solid ${props => props.active ? '#29B6F6' : 'transparent'} 1px;
  cursor: pointer;
  color: ${props => props.active ? '#29B6F6' : '#bdbdbd'};
  display: inline-block;
  font-family: 'Montserrat';
  font-size: 18pt;
  font-weight: 600;
  line-height: 40px;
  padding: 0 25px;
  text-align: center;
  transition: border-bottom .65s;
`;

export default ({children, currentTab, onClick, value}) => (
  <StyledTab
    active={parseInt(currentTab, 10) === value}
    onClick={onClick}
    value={value}
  >
    {children}
  </StyledTab>
);
