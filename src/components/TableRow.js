import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import ItemService from './ItemService';

class TableRow extends Component {

    constructor(props) {
        super(props);
        
        this.addItemService = new ItemService();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
        this.addItemService.deleteData(this.props.obj._id);
    }



    handleClick(e) {
        e.preventDefault();
        console.log(this.props.history)
        this.history.push('/description/' + this.props.obj._id);
    }

    render() {
        return (
            <tr onClick={this.handleClick}>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.itemname}
                </td>
                <td>
                    <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <form onSubmit={this.handleSubmit}>
                        <input type="submit" value="Delete" className="btn btn-danger" />
                    </form>
                </td>
            </tr>
        );
    }
}

export default TableRow;
