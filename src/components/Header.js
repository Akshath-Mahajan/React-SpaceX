import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
export class Header extends Component {
    render() {
        return (
            <div className="text-center py-2" style={headerCustomStyle}>
                <h1>Welcome to the SpaceX App</h1>
                <h2>Here is a list of all flights:</h2>
            </div>
        )
    }
}

const headerCustomStyle = {
    backgroundColor:'#333',
    color:'#BBB'
}
export default Header
