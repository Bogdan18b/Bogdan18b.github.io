import styled from 'styled-components';

const MainDiv = styled.div`
  display: flex;
  font-weight: 900;
  justify-content: center;
  align-items: flex-start;
  grid-column: 2 / 3;
  grid-row: 2 /3;
  font-size: 4rem;
  padding: 1rem;
  .middle {
    display: flex;
    flex-direction: column;
    color: var(--color-yellow);
    text-align: center;
    h1 {
      cursor: pointer;
    }
    h2 {
      margin-bottom: 1em;
    }
    div {
      color: var(--color-purple);
      margin-left: 100px;
      @media(max-width: 400px) {
        margin-left: 0;
  }
    }
    img {
      width: 25%;
      margin: 0 auto;
      border: 3px solid black;
      border-radius: 50%;
    }
  }
`;

export default MainDiv;