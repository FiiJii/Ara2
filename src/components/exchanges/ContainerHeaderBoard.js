import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: repeat(15, 1fr);

  @media screen and (max-width: 992px) {
    display: inline-block;
  }
`;
