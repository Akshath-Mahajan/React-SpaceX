import React, { Component } from 'react'

export class Sort extends Component {
    render() {
        return (
            <div className="col-12">
                <button type="button" className="btn btn-block btn-outline-success sort-btn" onClick={this.props.sortData}>
                    Change order to - {this.props.ascending?'Descending':'Ascending'}
                </button>
            </div>
        )
    }
}

export default Sort
