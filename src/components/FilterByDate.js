import React, { Component } from 'react'

export class FilterByDate extends Component {
    state = {start: null, end: null}
    changeDate = () => {
        var start_date = document.getElementById("start").value
        var end_date = document.getElementById("end").value
        this.setState({start:start_date, end:end_date})
    }
    render() {
        return (
        <form>
            <div className="form-row text-white">
                <div className="col-sm-4">
                    Start Date:
                    <input type="date" className="form-control" id="start" onChange={this.changeDate}/>
                </div>
                <div className="col-sm-4">
                    End Date:
                    <input type="date" className="form-control" id="end" onChange={this.changeDate}/>
                </div>
                <div className="col-sm-4">
                    &nbsp;
                    <input id="submit" value="Filter" type="submit" className="btn btn-block btn-outline-success" onClick={(e) => this.props.filterDates(e, this.state.start, this.state.end)}/>
                </div>
            </div>
        </form>
        )
    }
}

export default FilterByDate
