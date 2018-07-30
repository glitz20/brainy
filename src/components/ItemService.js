import axios from 'axios';

class ItemService {

    sendData(data) {
        axios.post('/items/add/post', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(err => console.log(err))
    }

    updateData(data, id) {
        axios.post('/items/update/' + id, {
            item: data
        })
            .then(res => this.setState({ items: res.data }))
            .catch(err => console.log(err))
    }

    deleteData(id) {
        axios.get('/items/delete/' + id)
            .then().catch(err => console.log(err))
    }
}

export default ItemService;
