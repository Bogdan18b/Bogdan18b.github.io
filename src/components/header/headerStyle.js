import styled from 'styled-components';

const HeaderList = styled.ul`
  grid-column-start: -2;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-yellow);
  font-size: 5rem;
  li {
    margin: 3rem;
    padding: 1rem;
    border-radius: 1rem;
    &:hover {
      color: var(--color-purple);
      border: 1px solid white;
      background-color: white;
      transform: scale(1.2);
    }
  }
  @media(max-width: 400px) {
    flex-direction: row;
    justify-content: center;
    grid-column-start: 2;
    grid-row: 3 / 4;
  }
  `;

export default HeaderList;
