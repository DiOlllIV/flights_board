import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Search from "./Search";
import Board from "./Board";
import { connect } from "react-redux";
import * as boardActions from "../board.actions";

const Main = ({ setFilterText }) => {
  return (
    <main className="main">
      <BrowserRouter>
        <Search setFilterText={setFilterText} />
        <Switch>
          <Route path="/:direction?/:flight?">
            <Board />
          </Route>
        </Switch>
      </BrowserRouter>
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
