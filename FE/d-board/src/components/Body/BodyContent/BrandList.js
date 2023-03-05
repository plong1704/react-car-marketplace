import React, { Component } from 'react';
import axios from 'axios';

class BrandList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listbrand: []
        };

    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/model-car',
            data: 'null'

        }).then(res => {
            console.log(res);
            this.setState({
                listbrand : res.data
            });
            
        }).catch(err => {
            console.log(err);
        });

    }
    render() {

        var { listbrand } = this.state.listbrand;



        return (
            <div className='list-brand'>
                listbrand
            </div>
        );
    }
}

export default BrandList;