import React, { Component } from 'react'
import Card from './Card'
import Sort from './Sort'
export class CardContainer extends Component {
    render() {
        return (
            <div className="row px-3">
                <Sort ascending={this.props.ascending} sortData={this.props.sortData}/>
                {this.props.data.map((flight) => <Card key={flight.flight_number} flight={flight} />)}
            </div>
        )
    }
}

export default CardContainer
