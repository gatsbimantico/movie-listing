import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import AsyncComponentFactory from "../AsyncComponent/AsyncComponentFactory";

const AsyncFilm = new AsyncComponentFactory(() => import("./Film"));

const filterByGenre = selectedGenres => results =>
  selectedGenres.length
    ? results.filter(film =>
        selectedGenres.some(
          genre => film.genre_ids.indexOf(parseInt(genre, 0)) !== -1
        )
      )
    : results;

const filterByVote = selectedVote => results =>
  selectedVote
    ? results.filter(film => film.vote_average / 2 >= selectedVote)
    : results;

const sortByPopularity = results => results.sort((a, b) => b.popularity - a.popularity);

const mapStateToProps = ({
  apiIsLoaded: { genres, nowPlaying },
  genreFilterClicked,
  voteFilterClicked: { selectedVote }
}) => ({
  genres,
  nowPlaying,
  selectedGenres: Object.keys(genreFilterClicked)
    .filter(k => genreFilterClicked[k]),
  selectedVote
});

const FilmList = ({
  className,
  genres,
  nowPlaying: { results },
  selectedGenres,
  selectedVote
}) => (
  <div className={className}>
    {[
      filterByVote(selectedVote),
      filterByGenre(selectedGenres),
      sortByPopularity,
    ].reduce((acc, fn) => fn(acc), results)
      .map(film => (
        <AsyncFilm key={film.id} {...film} genreList={genres} />
      ))}
  </div>
);

export default connect(mapStateToProps)(styled(FilmList)`
  columns: 5 200px;
  z-index: -1;
`);
