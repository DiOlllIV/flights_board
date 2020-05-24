import React from 'react';

const Board = (props) => {
    const dataList = props.data;
    console.log(dataList)
    return (
        <div className="board">
            <div className='board__box'>
                <div className="btn-section">
                    <button className="board-btn board-btn__left"
                        onClick={props.departures}
                    >
                        Departures
                    </button>
                    <button className="board-btn board-btn__right clicked"
                        onClick={props.arrivals}
                    >
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
                        {dataList.map(item => 
                            (
                                <li className="table-list__item">
                                    <span className="description__terminal">{item.term}</span>
                                    <span className="description__time">{new Date(item.actual).getHours()}:{new Date(item.actual).getMinutes()}</span>
                                    <span className="description__destination">{item["airportFromID.name_en"]}</span>
                                    <span className="description__status">{item.status}</span>
                                    <span className="description__airline">
                                        <img type="logo"
                                            className="logo"
                                            src={`${item.airline.en.logoName}`} />
                                        {item.airline.en.name}
                                    </span>
                                    <span className="description__flight">{item.codeShareData[0].codeShare}</span>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Board;