import React from "react";
import PropTypes from "prop-types";
import Search from "./Search";
import Board from "./Board";
import { connect } from "react-redux";
import * as boardActions from "../board.actions";

const Main = ({ setFilterText }) => {
  return (
    <main className="main">
      <Search setFilterText={setFilterText} />
      <Board />
    </main>
  );
};

Main.propTypes = {
  setFilterText: PropTypes.func.isRequired,
};

const mapDispatch = {
  setFilterText: boardActions.setFilterText,
};

export default connect(null, mapDispatch)(Main);
