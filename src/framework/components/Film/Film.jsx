import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getImage } from '../../../site/api';
import GenreFilterItem from '../GenreFilter/GenreFilterItem';

const FilmImage = styled.div`
  width: 160px;
  height: 256px;
  box-shadow: 0 0.3em 0.7em -0.3em black;
  margin: 0 auto 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: ${props =>
      props.src ? `url(${getImage(props.src)})` : "lightgrey"}
    no-repeat center center;
  background-size: cover;
`;

const FilmTitle = styled.div`
  font-weight: bold;
`;

const FilmGenreList = styled.div`
  margin-top: 10px;
  padding-top: 5px;
  box-shadow: 0 -11px 0 -10px lightgrey;
  color: grey;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const FilmGenre = styled.button`
  border: 0;
  // background: #fef33e;
  background: transparent;
  padding: 0 3px;
  display: inline-block;
  margin: 1px 1px;
  flex: 1 1 5%;
  white-space: pre;

  &:hover {
    background: #fdd803;
  }
`;

const Film = ({ className, genre_ids, genreList = [], title, poster_path }) => (
  <div className={className}>
    <FilmImage src={poster_path} />
    <FilmTitle>{title}</FilmTitle>
    <FilmGenreList>
      {genreList
        .filter(genre => genre_ids.indexOf(genre.id) !== -1)
        .map(genre => <GenreFilterItem key={genre.id} genre={genre} />)}
    </FilmGenreList>
  </div>
);

Film.propTypes = {
  adult: PropTypes.bool,
  className: PropTypes.string,
  backdrop_path: PropTypes.string,
  genre_ids: PropTypes.arrayOf(PropTypes.number),
  genreList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
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

export default styled(Film)`
  height: 350px;
  margin: 0 auto 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`;
