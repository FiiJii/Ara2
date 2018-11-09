import styled from 'styled-components';

export default styled.div`
  align-items: center;
  background-color: #17202A;
  display: grid;
  grid-template-columns: 5fr 0.5fr 0.5fr 0.5fr;
  grid-template-rows: auto;
  height: 70px;
  width: 100%;
  
  @media screen and (max-width: 620px) {
    display: flex;
    justify-content: space-between;
  }
`;
