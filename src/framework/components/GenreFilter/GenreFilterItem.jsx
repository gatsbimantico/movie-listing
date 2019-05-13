import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components';
import { GENRE_FILTER_CLICKED } from "../../../business-logic/actions";
import {electricPurple} from '../../../site/colors'

const mapDispatchToProps = dispatch => ({
  onClick: (id, value) => dispatch({ type: GENRE_FILTER_CLICKED, id, value })
});

const GenreItem = styled.div`
  border: 0;
  background: transparent;
  display: block;
  margin: 1px 1px;
  flex: 1 1 12%;
  white-space: pre;
  cursor: pointer;
  text-align: center;
  break-inside: avoid;

  label {
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 4px;
    ${props =>
      props.withCheckbox
        ? 'justify-content: start;'
        : 'justify-content: center;'}

    & > * {
      flex: 1 1 10px;
    }
  }

  input,
  label {
    cursor: pointer;
  }

  input {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }

  ${props =>
    props.withCheckbox &&
  `
    input ~ label:before {
      display: block;
      content: "☐ ";
    }

    &:not(:hover) input:checked ~ label {
      background: ${electricPurple};
      color: white;
    }

    input:checked ~ label:before {
      content: "☑ ";
    }
  `}

  &:hover label {
    background: #fdd803;
    color: black;
  }
`;

const GenreFilterItem = ({ className, genre, onClick, withCheckbox }) => (
  <GenreItem withCheckbox={withCheckbox} className={className}>
    {withCheckbox && (
      <input
        id={`GenreFilterItem-${genre.id}`}
        type="checkbox"
        onChange={event => onClick(genre.id, event.target.checked)}
      />
    )}
    <label className={!withCheckbox && 'text-small'} htmlFor={`GenreFilterItem-${genre.id}`}>
      {genre.name}
    </label>
  </GenreItem>
);

export default connect(null, mapDispatchToProps)(GenreFilterItem);
