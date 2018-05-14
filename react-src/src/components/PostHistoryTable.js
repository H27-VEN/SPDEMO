import React, { Component } from 'react';
import './PostHistoryTable.css';


class PostHistoryTable extends Component {
    
    render() {
        console.log("In PostHistoryTable: ",this.props.data);
        const tablerow = [];
        for(let i = 0; i < this.props.data.length; i++) {
           tablerow[i] = <tr key={i}>
                            <td>{this.props.data[i].userid}</td>
                            <td>{this.props.data[i].queuedPost}</td>
                            <td>{this.props.data[i].ErrorPost}</td>
                        </tr>
            }
        
        return (
        <div>
            <h2>Posting History</h2>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">Account Name</th>
                        <th scope="col">Queued</th>
                        <th scope="col">Errors</th>
                    </tr>
                </thead>
                <tbody>{tablerow}</tbody>
            </table>
        </div>
        );
    
  }
}

export default PostHistoryTable;