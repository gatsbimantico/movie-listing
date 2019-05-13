import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import GenreFilterItem from './GenreFilterItem';

const mapStateToProps = ({ apiIsLoaded: { genres } }) => ({
  genres,
});

const GenreFilter = ({ className, genres, onClick }) => (
  <div>
    <span>Filter by genre: </span>
    <div className={className}>
      {genres.map(genre => (
        <GenreFilterItem withCheckbox key={genre.id} genre={genre} />
      ))}
    </div>
  </div>
);

export default connect(mapStateToProps)(styled(GenreFilter)`
  width: 100%;
  columns: 150px;
  margin: 10px 0 10px;
`);
