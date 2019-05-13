import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { VOTE_FILTER_CLICKED } from "../../../business-logic/actions";

const mapStateToProps = ({ voteFilterClicked: { selectedVote } }) => ({
  selectedVote
});

const mapDispatchToProps = dispatch => ({
  onClick: vote => dispatch({ type: VOTE_FILTER_CLICKED, vote })
});

const votingItemStyle = `
  flex: 1 1 15px;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;

  input,
  label {
    cursor: pointer;
  }

  &:hover {
    background: lightgrey;
  }
`;

const VoteItem = styled.div`
  ${votingItemStyle}

  input {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }

  input ~ label:before {
    content: "☆";
  }

  input:checked ~ label:before {
    content: "★";
  }
`;

const VoteClear = styled.div`
  ${votingItemStyle}
`;

const VoteFilter = ({ className, onClick, selectedVote }) => (
  <div>
    <span>Filter by vote: </span>{" "}
    <div className={className}>
      <VoteClear>
        <input
          id="VoteItem-0"
          type="radio"
          onClick={() => onClick(0)}
          checked={selectedVote >= 0}
          readOnly
          hidden
        />
        <label htmlFor="VoteItem-0">Clear</label>
      </VoteClear>
      {[1, 2, 3, 4, 5].map(k => (
        <VoteItem key={k}>
          <input
            id={`VoteItem-${k}`}
            type="radio"
            onClick={() => onClick(k)}
            checked={selectedVote >= k}
            readOnly
          />
          <label htmlFor={`VoteItem-${k}`} />
        </VoteItem>
      ))}
    </div>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styled(VoteFilter)`
  display: inline-flex;
  margin: 20px 0 20px 10px;
  justify-content: center;
  align-items: center;
  max-width: 220px;
`);
