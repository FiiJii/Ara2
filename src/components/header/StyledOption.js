import styled from 'styled-components';

export default styled.div`
  border-bottom: ${props => props.active ? '2px #29B6F6 solid' : 'none'};
  display: inline-block;
  font-family: 'Montserrat';
  font-size: 12pt;
  font-weight: 400;
  height: 65px;
  line-height: 65px;
  min-width: 100px;
  text-align: center;

  &:hover {
    border-bottom: 2px #29B6F6 solid;
  }

  & a, &:focus a {
    color: white;
    text-decoration: none;
  }
`;
