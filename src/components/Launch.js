import React, { Component } from 'react'
import axios from 'axios';
import {date} from './Card'
export class Launch extends Component {
    state = {data:[]}
    componentDidMount(){
        axios.get(
            `https://api.spacexdata.com/v3/launches/${this.props.match.params.flight_number}`
            ).then(res=>this.setState({data:res.data}))
    }
    render() {
        const flight = this.state.data
        return (
                <div className="card">
                    <h1 className="card-title text-center">Flight #{flight.flight_number} - {flight.mission_name}</h1>
                    <div className="container">
                        <h2>Details:</h2>
                        <p>{flight.details?flight.details:'No details provided'}</p>
                    </div>
                    <div className="container">
                        <h2>Launch Site:</h2>
                        <p>{flight.launch_site?flight.launch_site.site_name_long:"No details provided"}</p>
                    </div>
                    <div className="container">
                        <h2>Launch Date:</h2>
                        <p>{flight.launch_date_unix?date(flight.launch_date_unix):"No details provided"}</p>
                    </div>
                </div>
        )
    }
}

export default Launch
