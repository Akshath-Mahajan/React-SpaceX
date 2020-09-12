import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Card from './components/Card'
import Launch from './components/Launch'
export class App extends Component {
    state  = {data:[], ascending:true}
    componentDidMount(){
        axios.get('https://api.spacexdata.com/v3/launches?limit=12').then(
            res => {this.setState({data:res.data})}
        )
    }
    sortData = () => {
        let temp = [...this.state.data]
        temp.sort(
            (a,b) => {
                let x = parseInt(a.launch_date_unix)
                let y = parseInt(b.launch_date_unix)
                if(this.state.ascending){return x>y?-1:x<y?1:0}
                else{return x>y?1:x<y?-1:0}
            }
        )
        this.setState((prevState) => {return {data:temp, ascending:!prevState.ascending}})
    }
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <Header />
                    <Route exact path="/">
                        <div className="row px-3">
                            <div className="col-12">
                                <button type="button" className="btn btn-block btn-outline-success sort-btn" onClick={this.sortData}>
                                    Change order to - {this.state.ascending?'Descending':'Ascending'}
                                </button>
                            </div>
                            {this.state.data.map((flight) => <Card key={flight.flight_number} flight={flight} />)}
                        </div>
                    </Route>
                    <Route exact path="/:flight_number" component={Launch}></Route>
                </div>
            </BrowserRouter>
        )
    }
}

export default App