import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as boardActions from "../board.actions";
import * as boardSelectors from "../board.selectors";
import BoardBtns from "./BoardBtns";
import TableDescrptn from "./TableDescrptn";
import TableList from "./TableList";

const Board = ({
  flightsList,
  arrivalClick,
  departureClick,
  getArrivalList,
  getDepartureList,
}) => {
  useEffect(() => {
    getArrivalList();
  }, []);

  return (
    <div className="board">
      <BoardBtns
        arrivalClick={arrivalClick}
        departureClick={departureClick}
        handleChangeDepartures={getDepartureList}
        handleChangeArrivals={getArrivalList}
      />
      <div className="board__table">
        <TableDescrptn />
        <TableList flightsList={flightsList} />
      </div>
    </div>
  );
};

Board.propTypes = {
  flightsList: PropTypes.arrayOf(PropTypes.shape()),
  arrivalClick: PropTypes.bool,
  departureClick: PropTypes.bool,
  getDepartureList: PropTypes.func.isRequired,
  getArrivalList: PropTypes.func.isRequired,
};

const mapDispatch = {
  getArrivalList: boardActions.getArrivalList,
  getDepartureList: boardActions.getDepartureList,
};

const mapState = (state) => {
  return {
    flightsList: boardSelectors.filteredFlightsSelector(state),
    arrivalClick: boardSelectors.boardArrivalClick(state),
    departureClick: boardSelectors.boardDepartureClick(state),
  };
};

export default connect(mapState, mapDispatch)(Board);
