import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import AsyncComponentFactory from "../AsyncComponent/AsyncComponentFactory";

const AsyncFilm = new AsyncComponentFactory(() => import("./Film"));

const mapStateToProps = ({ apiIsLoaded: { genres, nowPlaying } }) => ({
  genres,
  nowPlaying
});

const FilmList = ({ className, genres, nowPlaying: { results } }) => (
  <div className={className}>
    {results.map(film => (
      <AsyncFilm key={film.id} {...film} genreList={genres} />
    ))}
  </div>
);

export default connect(mapStateToProps)(styled(FilmList)`
  columns: 160px;
  z-index: -1;
`);
