import React from 'react';

const App = () => {
    let clicked = false;
    const clickedBtnClass = !clicked ? 'board-btn board-btn__left' : 'board-btn board-btn__left clicked';

    const handleClick = () => {
        if (!clicked)
            clicked = true;
        
        if(clicked)
        clicked = false;
    }
    return (
        <main className="main">
            <div className="search">
                <h1 className="search__title">Search Flight</h1>
                <div className="search__box">
                    <input className="search__input" 
                        placeholder="Airline, destination or flight #"
                    />
                    <button className="search__btn">
                        Search
                    </button>
                </div>
            </div>

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
                        <div className="board__table-description">
                            <span>Termimal</span>
                            <span>Local time</span>
                            <span>Destination</span>
                            <span>Status</span>
                            <span>Airline</span>
                            <span>Flight</span>
                        </div>
                        <ul className="table-list">
                            <li className="table-list__item">
                                <span>A</span>
                                <span>0:55</span>
                                <span>Larnaca</span>
                                <span>Status</span>
                                <span>Wizz Air</span>
                                <span>W66260</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default App;