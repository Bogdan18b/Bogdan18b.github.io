import styled from 'styled-components';

const AboutDiv = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 3rem;
  color: var(--color-purple);
  font-size: 3rem;
  padding: 1rem;
  img {
    margin: 2px auto;
    border: 1rem solid white;
    border-radius: 1rem;
    width: 30%;
    height: 90%;
  }
  article {
    width: 50%;
  }
  @media(max-width: 400px) {
    flex-direction: column-reverse;
    img {
      width: 65%;
      height: 40%;
    }
    article {
      width: 90%;
    }
  }
`;

export default AboutDiv;