import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Card from './components/Card'
export class App extends Component {
    state  = {data:[]}
    componentDidMount(){
        axios.get('https://api.spacexdata.com/v3/launches?limit=12').then(
            res => {this.setState({data:res.data})}
        )
    }
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <Header />
                    <Route exact path="/">
                        <div className="row px-3">
                            {this.state.data.map((flight) => <Card key={flight.flight_number} flight={flight} />)}
                        </div>
                    </Route>
                    
                </div>
            </BrowserRouter>
        )
    }
}

export default App