import React, { Component } from 'react';
import ItemService from './ItemService';

class AddItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemname: '',
            category: '',
            description:''
        };
        this.addItemService = new ItemService();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }


    handleSubmit(event) {
        event.preventDefault();
        this.addItemService.sendData({
            itemname: this.state.itemname,
            category: this.state.category,
            description: this.state.description
        })


        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>

                    <label>
                        Add Item:
              <input name='itemname' type="text" onChange={this.handleChange} className="form-control" />
                    </label><br />
                    <label>
                        Category:
              <input name='category' type="text" onChange={this.handleChange} className="form-control" />
                    </label><br />
                    <label>
                        Description:
              <input name='description' type="text" onChange={this.handleChange} className="form-control" />
                    </label><br />

                    <input type="submit" value="Submit" className="btn btn-primary" />
                </form>
            </div>
        );
    }
}

export default AddItem;
