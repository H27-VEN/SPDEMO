import React from 'react';
import PropTypes from 'prop-types';
import facebook from '../images/icons-facebook.png';
import linkedin from '../images/icons-linkedin.png';
import instagram from '../images/icons-instagram.png';
import './PostHistoryTable.css';


const PostHistoryTable = (props) => {
  // console.log("In PostHistoryTable:", props.data);
  const tablerow = [];
  const icons = { facebook, linkedin, instagram };
  for (let i = 0; i < props.data.length; i += 1) {
    tablerow[i] = (
      <tr key={i}>
        <td>
          <img src={icons[props.data[i].profile.toLowerCase()]} alt="profile-icon" />
          <span>{props.data[i].userid}</span>
        </td>
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
  data: PropTypes.arrayOf(PropTypes.object),
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
