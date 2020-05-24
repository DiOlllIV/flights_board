import React from 'react';
import Search from './Search';
import Board from './Board';

const Main = (props) => {
    return (
        <main className="main">
            <Search />
            <Board data={props.data}
                arrivals={props.arrivals}
                departures={props.departures}
            />
        </main>
    );
};

export default Main;