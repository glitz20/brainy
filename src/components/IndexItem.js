import React, { Component } from 'react';
import ItemService from './ItemService';
import axios from 'axios';
import TableRow from './TableRow';

class IndexItem extends Component {

    constructor(props) {
        super(props);

        this.state = { value: '', items: '', category: " " };
        this.handleClick = this.handleClick.bind(this);
        this.handleClickb = this.handleClickb.bind(this);
        this.handleClickdefault = this.handleClickdefault.bind(this);

        this.addItemService = new ItemService();
    }
    componentWillMount() {
        axios.get('/items/')
            .then(response => {
                this.setState({ items: response.data });
            })
            .catch(function (error) {
                console.log(error);

            })
    }

    handleClick() {
        this.setState({ category: "tottenham" });
    }
    handleClickb() {
        this.setState({ category: "realmadrid" });
    }

    handleClickdefault() {
        this.setState({ category: " " });
    }


    tabRow() {
        if (this.state.items instanceof Array) {
            if (this.state.category === " ") {
                return this.state.items.map(function (object, i) {
                    return <TableRow obj={object} key={i} />;
                })
            }
            else {
                let real = this.state.items.filter((user) => user.category === this.state.category)
                return real.map(function (object, i) {
                    return <TableRow obj={object} key={i} />;
                })
            }

        }
    }

    render() {
        return (
            <div className="container">
                <div className="filter">
                    <button className="btn btn-primary" onClick={this.handleClick}>Tottenham</button>
                    <button className="btn btn-primary" onClick={this.handleClickb}>RealMadrid</button>
                    <button className="btn btn-primary" onClick={this.handleClickdefault}>All</button>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>No.</td>
                            <td>Item</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}

                    </tbody>
                </table>
            </div>
        );
    }
}

export default IndexItem;
