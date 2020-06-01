import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import classNames from "classnames";

const BoardBtns = ({
  arrivalClick,
  departureClick,
  handleChangeDepartures,
  handleChangeArrivals,
}) => {
  const arrivalClass = classNames("board-btn board-btn__right", {
    clicked: arrivalClick,
  });
  const departureClass = classNames("board-btn board-btn__left", {
    clicked: departureClick,
  });

  return (
    <div className="btn-section">
      <Link to="/departures">
        <button className={departureClass} onClick={handleChangeDepartures}>
          Departures
        </button>
      </Link>
      <Link to="/arrivals">
        <button className={arrivalClass} onClick={handleChangeArrivals}>
          Arrivals
        </button>
      </Link>
      <Switch>
        <Route path={"/departures"}></Route>
        <Route path={"/arrivals"}></Route>
      </Switch>
    </div>
  );
};

export default BoardBtns;
