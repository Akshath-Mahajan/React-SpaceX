import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Launch from './components/Launch'
import CardContainer from './components/CardContainer'
import FilterByDate from './components/FilterByDate'
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
    filterDates = (e, start, end) => {
        e.preventDefault()
        axios.get(`https://api.spacexdata.com/v3/launches?start=${start}&end=${end}&limit=12`).then(
            res => {this.setState({data:res.data})}
        )
    }
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <Header />
                    <Route exact path="/">
                        <FilterByDate filterDates={this.filterDates}/>
                        <CardContainer data={this.state.data} ascending={this.state.ascending} sortData={this.sortData}/>
                    </Route>
                    <Route exact path="/:flight_number" component={Launch}></Route>
                </div>
            </BrowserRouter>
        )
    }
}

export default App