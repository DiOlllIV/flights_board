import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as boardActions from '../board.actions';
import * as boardSelectors from '../board.selectors';
import BoardBtns from './BoardBtns';
import TableDescrptn from './TableDescrptn';
import TableList from './TableList';

class Board extends Component {

    componentDidMount() {
        this.props.getArrivalList();
    }

    handleChangeArrivals = () => {
        this.props.getArrivalList();
    }  
    

    handleChangeDepartures = () => {
        this.props.getDepartureList();
    }

    render() {
        console.log(this.props.flightsList);

        return (
            <div className="board">
                <BoardBtns 
                    arrivalClick={this.props.arrivalClick}
                    departureClick={this.props.departureClick}
                    handleChangeDepartures={this.handleChangeDepartures}
                    handleChangeArrivals={this.handleChangeArrivals}
                />
                    <div className="board__table">
                        <TableDescrptn />
                        <TableList 
                            flightsList={this.props.flightsList}
                        />
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
        arrivalClick: boardSelectors.boardArrivalClick(state),
        departureClick: boardSelectors.boardDepartureClick(state),
    }
}

export default connect(mapState, mapDispatch)(Board);