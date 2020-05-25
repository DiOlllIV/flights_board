import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as boardActions from '../board.actions';
import * as boardSelectors from '../board.selectors';

class Board extends Component {
 

    handleChangeArrivals = () => {
        this.props.getArrivalList();
    }  
    

    handleChangeDepartures = () => {
        this.props.getDepartureList();
    }

    render() {
        console.log(this.props);
        return (
            <div className="board">
                <div className='board__box'>
                    <div className="btn-section">
                        <button className="board-btn board-btn__left"
                            onClick={() => this.handleChangeDepartures()}
                        >
                            Departures
                        </button>
                        <button className="board-btn board-btn__right clicked"
                            onClick={this.handleChangeArrivals}
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
                            {this.props.flightsList.map(item => 
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
    }
};


const mapDispatch = {
    getArrivalList: boardActions.getArrivalList,
    getDepartureList: boardActions.getDepartureList,
};

const mapState = state => {
    return {
        flightsList: boardSelectors.boardListSelector(state),
    }
}

export default connect(mapState, mapDispatch)(Board);