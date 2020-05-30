import React from "react";

const BoardBtns = ({
  arrivalClick,
  departureClick,
  handleChangeDepartures,
  handleChangeArrivals,
}) => {
  const arrivalClass = arrivalClick
    ? "board-btn board-btn__right clicked"
    : "board-btn board-btn__right";
  const departureClass = departureClick
    ? "board-btn board-btn__left clicked"
    : "board-btn board-btn__left";

  return (
    <div className="btn-section">
      <button className={departureClass} onClick={handleChangeDepartures}>
        Departures
      </button>
      <button className={arrivalClass} onClick={handleChangeArrivals}>
        Arrivals
      </button>
    </div>
  );
};

export default BoardBtns;
