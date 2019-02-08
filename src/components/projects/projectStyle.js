import styled from 'styled-components';
export const ProjectDiv = styled.div`
grid-area: 2 / 2 / 3 / 3; 
flex-wrap: wrap;
height: fit-content;
background-color: rgba(255, 255, 255, 0.2);
justify-content: center;
border-radius: 20px;
`;
export const ProjectList = styled.ul`
border-top: .5rem dashed var(--color-purple);
&:nth-of-type(1) {
  border-top: none;
}
padding: 1rem;
  img {
    width: 50%;
    margin: 0 auto;
    box-shadow: 1px -4px 20px 2px rgba(153,27,181,0.59);;
  }
  li {
    margin: 0.5rem;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--color-yellow);
    a {
      display: contents;
      font-size: 3rem;
    }
  }
  li.project-title:hover {
    text-decoration: underline;
  }
  span {
    margin-left: 2rem;
    color: var(--color-purple);
    padding: 1rem;
    &:hover {
      color: var(--color-yellow);
      background-color: var(--color-purple);
      transform: scale(1.2);
      text-decoration: none;
    }
  }
`;

