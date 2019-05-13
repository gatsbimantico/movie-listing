import React, { Component } from 'react';
import styled from 'styled-components';
import { getImage } from '../../../site/api';

const isInViewport = elem => {
  var bounding = elem.getBoundingClientRect();

  const val =
    bounding.bottom >= 0 &&
    bounding.top <=
      (window.innerHeight || document.documentElement.clientHeight);

  return val;
};

const FilmImage = ({ className, src }) => (
  <div
    className={className}
    style={{ backgroundImage: src ? `url(${src})` : undefined }}
  />
);

const FilmImageStyled = styled(FilmImage)`
  width: 160px;
  min-height: 160px;
  box-shadow: 0 0.3em 0.7em -0.3em black;
  margin: 0 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: lightgrey no-repeat center center;
  background-size: cover;
  transition: 0.3s;
  position: relative;
  z-index: 2;
  ${props =>
    !props.hover
      ? "height: 100%;"
      : `
    max-width: 30vw;
    width: 200px;
    height: 300px;
  `}
`;

class FilmImageWrapper extends Component {
  state = {
    isInViewPort: true,
  };

  listening = true;
  rendered = false;

  componentDidMount() {
    if (typeof document === "undefined") return;

    const main = document.querySelector("main");

    if (main)
      main.addEventListener("scroll", this.updateVisibility);

    setTimeout(this.updateVisibility(), 100);
  }

  componentWillUnmount() {
    if (typeof document === "undefined" || this.rendered) return;

    const main = document.querySelector("main");

    if (main)
      main.removeEventListener("scroll", this.updateVisibility);
  }

  updateVisibility = event => {
    if (!this.listening || this.rendered) return;

    this.listening = false;
    this.setState({ isInViewPort: isInViewport(this.reference) }, () => {
      setTimeout(() => {
        this.listening = true;
      }, 300);
    });
  }

  saveRef = ref => {
    this.reference = ref;
  };

  render() {
    const { hover, src } = this.props;
    const { isInViewPort } = this.state;

    if (isInViewPort) {
      this.rendered = true;
      document.querySelector('main').removeEventListener("scroll", this.updateVisibility);
    }

    return (
      <div ref={this.saveRef} style={{ height: '100%' }}>
        <FilmImageStyled
          hover={hover}
          src={isInViewPort ? getImage(src) : undefined}
        />
      </div>
    );
  }
}

export default FilmImageWrapper;
