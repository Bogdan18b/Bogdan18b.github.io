import styled from 'styled-components';

const ProjectList = styled.ul`
  padding: 1rem;
  position: relative;
  margin-right: 4rem;
  img {
    width: 80%;
    margin: 0 auto;
    box-shadow: 1px -4px 46px 5px rgba(153,27,181,0.59);;
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
  li.project-title {
    font-size: 3rem;
    font-weight: bolder;
    margin: 2rem;
    text-align: center;
    color: var(--color-yellow);
    &:hover {
      text-decoration: underline;
    }
  }
   li.project-github {
    position: absolute;
    top: 0;
    right: 10%;
    font-size: 4rem;
    &:hover {
      color: var(--color-purple);
      border: 1px solid white;
      background-color: white;
      transform: scale(1.2);
    }
  }
`;

export default ProjectList;

