import React, { Component } from 'react';
import Main from './board/components/Main';
import {fetchFlightsList} from './board/board.gateway';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flightsData: [],
        };
    }

    handleChangeArrivals = () => 
        fetchFlightsList()
        .then(data => 
            this.setState({
                flightsData: data.body.arrival,
            })
        );    
    

    handleChangeDepartures = () => 
        fetchFlightsList()
        .then(data => 
            this.setState({
                flightsData: data.body.departure,
            })
        );
    

    render() {
        fetchFlightsList()
            .then(data => console.log(data.body.arrival))
        return (
            <Main 
                data={this.state.flightsData}
                departures={this.handleChangeDepartures}
                arrivals={this.handleChangeArrivals}
            />
        );
    }
};

export default App;