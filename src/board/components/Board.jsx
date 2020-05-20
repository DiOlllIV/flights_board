import React from 'react';

const Board = () => {

    return (
        <div className="board">
            <div className='board__box'>
                <div className="btn-section">
                    <button className="board-btn board-btn__left">
                        Departures
                    </button>
                    <button className="board-btn board-btn__right clicked">
                        Arrivals
                    </button>
                </div>
            
                <div className="board__table">
                    <div className="board__table description">
                        <span className="description__terminal">Termimal</span>
                        <span className="description__time">Local time</span>
                        <span className="description__destination">Destination</span>
                        <span className="description__status">Status</span>
                        <span className="description__airline">Airline</span>
                        <span className="description__flight">Flight</span>
                    </div>
                    <ul className="table-list">
                        <li className="table-list__item">
                            <span className="description__terminal">A</span>
                            <span className="description__time">0:55</span>
                            <span className="description__destination">Larnaca</span>
                            <span className="description__status">Status</span>
                            <span className="description__airline">Wizz Air</span>
                            <span className="description__flight">W66260</span>
                        </li>
                        <li className="table-list__item">
                            <span className="description__terminal">A</span>
                            <span className="description__time">0:55</span>
                            <span className="description__destination">Larnaca</span>
                            <span className="description__status">Status</span>
                            <span className="description__airline">Wizz Air</span>
                            <span className="description__flight">W66260</span>
                        </li>
                        <li className="table-list__item">
                            <span className="description__terminal">A</span>
                            <span className="description__time">0:55</span>
                            <span className="description__destination">Larnaca</span>
                            <span className="description__status">Status</span>
                            <span className="description__airline">Wizz Air</span>
                            <span className="description__flight">W66260</span>
                        </li>
                        <li className="table-list__item">
                            <span className="description__terminal">A</span>
                            <span className="description__time">0:55</span>
                            <span className="description__destination">Larnaca</span>
                            <span className="description__status">Status</span>
                            <span className="description__airline">Wizz Air</span>
                            <span className="description__flight">W66260</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Board;