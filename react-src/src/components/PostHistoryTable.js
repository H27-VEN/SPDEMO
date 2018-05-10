import React, { Component } from 'react';
import './PostHistoryTable.css';


class PostHistoryTable extends Component {
    
    render() {
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
                <tbody>
                    <tr>
                        <td>Dummy Account</td>
                        <td>10</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
    }

}

export default PostHistoryTable;