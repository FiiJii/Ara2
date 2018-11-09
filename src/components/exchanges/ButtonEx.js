import styled from 'styled-components';

export default styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-top: 16px;
  background: #${props => props.active ? '6CFB08' : 'FC4326'};
  border: none;
  border-radius: 15px;
  color: #fff;
  font-family: 'Montserrat';
  font-weight: bold;
`;
