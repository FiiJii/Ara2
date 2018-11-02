import React from 'react';
import styled from 'styled-components';

const Button = ({active, children, className, disabled, onClick, text, value}) => {
  const props = {
    disabled,
    onClick,
    value,
  };

  return (
    <button
      className={className+' '+(active ? 'active' : '')}
      {...props}
    >
      {text ? text : children}
    </button>
  );
};

export default styled(Button)`
  background: ${props => props.active ? '#29B6F6' : '#A2B4C3'};
  border: none;
  border-radius: 15px;
  color: #fff;
  cursor: ${props => props.disabled ? 'no-drop !important' : 'pointer'};
  font-family: 'Montserrat';
  font-size: ${props => props.medium ? '18px' : '14px'};
  font-weight: bold;
  margin-right: 10px;
  padding: ${props => props.wide ? '3px 20px' : '3px 6px'};
  width: ${props => props.width ? props.width : 'auto'};
`;
