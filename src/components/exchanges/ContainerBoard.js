import styled from 'styled-components';

export default styled.div`
  display: block;
  margin-top: 20px;

  @media screen and (max-width: 992px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(305px, 1fr));
    justify-items: center
  }
`;
