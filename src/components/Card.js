import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Card extends Component {
    render() {
        return (
            <div className="col-12 col-md-6 col-xl-4 px-0">
                <Link to={link(this.props.flight.flight_number)} style={{textDecoration:'none', color:'#333'}}>
                <div className="card h-100 border-primary">
                    <div className="card-body">
                        <h4 className="card-title">{this.props.flight.mission_name}<br/>
                            <small>{date(this.props.flight.launch_date_unix)}, {this.props.flight.launch_site.site_name}</small>
                        </h4>
                        <p className="card-text">
                            {this.props.flight.details?this.props.flight.details:'No details available'}
                        </p>
                    </div>
                </div>
                </Link>
            </div>
        )
    }
}
const link = (num) => "/"+num;
const date = (unix_stamp) => {
    const milliseconds = unix_stamp * 1000;
    const dateObject = new Date(milliseconds)
    return dateObject.toLocaleDateString('en-GB', { hour12: true })
};
export default Card
export {date};
