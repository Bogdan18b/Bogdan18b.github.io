import React, { Component } from 'react';
import MainDiv from './mainStyle';
import Pdf from '../../resume.pdf';
import Typist from 'react-typist';

class Title extends Component {
  state = {
    showModal: false,
    showAbout: false,
    showProjects: false
  };
  updateStyle = () => {
    this.titleRef.current.style.gridColumn = '1/3';
    this.titleRef.current.style.gridRow = '1/2';
    this.titleRef.current.children[0].style.flexDirection = 'row';
    this.titleRef.current.children[0].style.flex = '1';
    this.titleRef.current.querySelector('h2').textContent = '';
  };
  titleRef = React.createRef(null);
  handleShow = () => {
    this.updateStyle();
    this.props.showAbout();
  }
  handleProjects = () => {
    this.updateStyle();
    this.props.showProjects();
  }
  render() {
    return (
      <MainDiv ref={this.titleRef}>
        <Typist className="middle"
        >
          <h1>BOGDAN BOBLETEC</h1>
          <br />
          <h2>software developer from New York City</h2>
          <div>
            <button
              onClick={this.handleShow}
            >About&nbsp;&nbsp;-&nbsp;&nbsp;
              </button>
            <button
              onClick={this.handleProjects}
            >Projects&nbsp;&nbsp;-&nbsp;&nbsp;
              </button>
            <a href={Pdf} rel="noopener noreferrer"
              target="_blank">Resume
              </a>
          </div>
        </Typist>
      </MainDiv>
    );
  }
}

export default Title;
