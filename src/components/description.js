import React, { Component } from 'react';
import axios from 'axios';
import ItemService from './ItemService';

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = { description: '' };
    }

    componentDidMount() {
        axios.get('/items/description/' + this.props.match.params.id)
            .then(response => {
                this.setState({ description: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                Here is the description
                {this.state.description}
            </div>
            
            )
    }
}

export default Description;
