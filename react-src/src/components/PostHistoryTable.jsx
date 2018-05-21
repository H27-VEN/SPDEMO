import React, {Component} from 'react';
import PropTypes from 'prop-types';
import facebook from '../images/icons-facebook.png';
import linkedin from '../images/icons-linkedin.png';
import instagram from '../images/icons-instagram.png';
import './PostHistoryTable.css';


class PostHistoryTable extends Component {
  
  constructor(props) {
    super(props);
    this.state = { rowdata: [], filter: false };
    this.filtertext = '';
  }

  createTableRows() {
    
    const tablerow = [];
    const icons = { facebook, linkedin, instagram };
    let data = [];
    
    if (this.state.filter) {
      data = this.state.rowdata;
    } else {
      data = this.props.data;
    }

    if(data.length === 0) {
      return <tr><div className="text-center">No Records Found</div></tr>;
    }

    for (let i = 0; i < data.length; i += 1) {
      tablerow[i] = (
        <tr key={i}>
          <td>
            <img src={icons[data[i].profile.toLowerCase()]} alt="profile-icon" />
            <span>{data[i].userid}</span>
          </td>
          <td>{data[i].queuedPost}</td>
          <td>{data[i].ErrorPost}</td>
        </tr>);
    }
      return tablerow;
  }

  render() {
    
    console.log('in render method');
    const tableData = this.createTableRows();
      return (
        <div>
          <h2>Posting History</h2>
          <div className="form-group">
            <input className="form-control" id="myInput" type="text" placeholder="Search.." value={this.filtertext} onChange = {this.filterData.bind(this)} />
          </div>
          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">Account Name</th>
                <th scope="col">Queued</th>
                <th scope="col">Errors</th>
              </tr>
            </thead>
            <tbody>
              {tableData}
            </tbody>
          </table>
        </div>
      );
    
  }

  filterData(event) {    
    
    this.filtertext = event.target.value.trim();
    const filterText = this.filtertext;
    console.log('filtertext: ',filterText);
    const data = this.props.data.filter((user) => {
       return user.userid.startsWith(filterText);
    });
    let filterStatus = false;
    console.log("data: ", data);
    if(filterText) {
      filterStatus = true;
    }
  
    this.setState({
      rowdata: data,
      filter: filterStatus
    });
  }
}

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
