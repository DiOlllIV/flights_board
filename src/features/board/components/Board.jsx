import React, { useEffect } from "react";
import { Switch, useLocation } from "react-router-dom";
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
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/arrivals") getArrivalList();

    if (location.pathname === "/departures") getDepartureList();
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
        <Switch>
          <TableList flightsList={flightsList} />
        </Switch>
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
