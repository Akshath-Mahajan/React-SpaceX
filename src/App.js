import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
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
                </div>
            </BrowserRouter>
        )
    }
}

export default App