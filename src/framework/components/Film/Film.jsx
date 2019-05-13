import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import GenreFilterItem from '../GenreFilter/GenreFilterItem';

import FilmImage from './FilmImage';

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
  break-inside: avoid;
`;
