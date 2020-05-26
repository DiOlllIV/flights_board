import React from 'react';
import { setTime, green, blue } from '../addFunctions';

const TableList = ({flightsList}) => (
    <ul className="table-list">
        {flightsList.map(item => {
            const colorStyle = (item.terminal === 'A') ? green : blue; 

            return (
                <li className="table-list__item"
                    key={item.id}
                >
                    <span className="description__terminal">
                        <span className="item"
                            style={colorStyle}>{item.terminal}</span>
                    </span>
                    <span className="description__time">
                        {setTime(item.localTime)}
                    </span>
                    <span className="description__destination">
                        {item.destination}
                    </span>
                    <span className="description__status">
                        {item.status}
                    </span>
                    <span className="description__airline">
                        <img type="logo"
                            className="logo"
                            src={`${item.airlineLogo}`} />
                        {item.airlineName}
                    </span>
                    <span className="description__flight">
                        {item.flight}
                    </span>
                </li>
            )}
        )}
    </ul>
);

export default TableList;