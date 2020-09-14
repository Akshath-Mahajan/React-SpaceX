import React, { Component } from 'react'

export class Sort extends Component {
    state = {ascending: this.props.ascending}
    render() {
        return (
            <div className="col-12">
                <button type="button" className="btn btn-block btn-outline-success sort-btn" onClick={this.props.sortData}>
                    Change order to - {this.state.ascending?'Descending':'Ascending'}
                </button>
            </div>
        )
    }
}

export default Sort
