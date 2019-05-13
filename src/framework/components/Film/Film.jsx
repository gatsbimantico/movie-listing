import React, { PureComponent } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

import GenreFilterItem from '../GenreFilter/GenreFilterItem';

import FilmImage from './FilmImage';

const FilmTitle = styled.h6`
  font-weight: bold;
  max-width: 160px;
  margin-top: 20px;
`;

const FilmOverview = styled.div`
  width: 50vw;
  margin-top: 20px;
  padding: 0 10px;
  text-align: left;
`;

const FilmGenreList = styled.div`
  margin-top: 20px;
  padding-top: 10px;
  box-shadow: 0 -11px 0 -10px lightgrey;
  color: grey;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 160px;
`;

const FilmStyled = styled.article`
  height: 350px;
  margin: 0 10px 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  break-inside: avoid;
  flex: 1 1 220px;
  position: relative;
  transition: 0.3s;

  ${props =>
    props.hover
      ? `
      height: initial;
      margin: 40px 0;
      top: -50px;
      left: 0px;
      flex-direction: row;
      z-index: 3;`
      : ""}
`;

class Film extends PureComponent {
  static propTypes = {
    adult: PropTypes.bool,
    backdrop_path: PropTypes.string,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
    genreList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
      })
    ),
    id: PropTypes.number,
    original_language: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    popularity: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    video: PropTypes.bool,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number
  };

  state = {
    hover: false,
    transition: false
  };

  toggleHover = event =>
    this.state.hover ? this.removeHover(event) : this.addHover(event);

  addHover = event => {
    const target = event.target;
    this.setState({ hover: true, transition: true });
    setTimeout(() => target.closest("article").scrollIntoView(), 10);
  };

  removeHover = () =>
    setTimeout(
      () => this.setState({ hover: false }),
      this.state.transition ? 300 : 0
    );

  render() {
    const {
      genre_ids,
      genreList = [],
      overview,
      title,
      poster_path
    } = this.props;
    const { hover } = this.state;

    return (
      <FilmStyled hover={hover} onClick={this.toggleHover}>
        <div style={{ flex: "0 1 256px", height: hover ? "256px" : "" }}>
          <FilmImage src={poster_path} hover={hover} />
        </div>
        <div>
          <FilmTitle>{title}</FilmTitle>
          <FilmGenreList>
            {genreList
              .filter(genre => genre_ids.indexOf(genre.id) !== -1)
              .map(genre => (
                <GenreFilterItem key={genre.id} genre={genre} />
              ))}
          </FilmGenreList>
          {hover && <FilmOverview>{overview}</FilmOverview>}
        </div>
      </FilmStyled>
    );
  }
}

export default Film;
