import React from 'react';

const TableList = ({flightsList}) => (
    <ul className="table-list">
        {flightsList.map(item => 
            (
                <li className="table-list__item"
                    key={item.ID}
                >
                    <span className="description__terminal">
                        {item.term}
                    </span>
                    <span className="description__time">
                        {new Date(item.actual).getHours()}:{new Date(item.actual).getMinutes()}
                    </span>
                    <span className="description__destination">
                        {item["airportFromID.name_en"] || item["airportToID.name_en"]}
                    </span>
                    <span className="description__status">
                        {item.status}
                    </span>
                    <span className="description__airline">
                        <img type="logo"
                            className="logo"
                            src={`${item.airline.en.logoName}`} />
                        {item.airline.en.name}
                    </span>
                    <span className="description__flight">
                        {item.codeShareData[0].codeShare}
                    </span>
                </li>
            ))}
    </ul>
);

export default TableList;