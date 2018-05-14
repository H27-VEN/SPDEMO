import React from 'react';
import PropTypes from 'prop-types';
import './PostHistoryTable.css';


const PostHistoryTable = (props) => {
  // console.log("In PostHistoryTable:", props.data);
  const tablerow = [];
  for (let i = 0; i < props.data.length; i += 1) {
    tablerow[i] = (
      <tr key={i}>
        <td>{props.data[i].userid}</td>
        <td>{props.data[i].queuedPost}</td>
        <td>{props.data[i].ErrorPost}</td>
      </tr>);
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
};

PostHistoryTable.propTypes = {
  data: PropTypes.arrayOf,
  queuedPost: PropTypes.number,
  ErrorPost: PropTypes.number,
  userid: PropTypes.string,
};

PostHistoryTable.defaultProps = {
  data: [],
  queuedPost: 0,
  ErrorPost: 0,
  userid: 'userid',
};

export default PostHistoryTable;
