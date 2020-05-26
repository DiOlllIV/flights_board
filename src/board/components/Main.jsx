import React from 'react';
import Search from './Search';
import Board from './Board';
import { connect } from 'react-redux';
import * as boardActions from '../board.actions';

const Main = ({ setFilterText }) => {
    return (
        <main className="main">
            <Search 
                setFilterText={setFilterText}
            />
            <Board />
        </main>
    );
};

const mapState = state => {
    return {
        filterText: state.board.filterText,
    };
};

const mapDispatch = {
    setFilterText: boardActions.setFilterText,
}

export default connect(mapState, mapDispatch)(Main);