import React, { Component } from 'react';

import './Body.css'
import BrandList from './BodyContent/BrandList';
import BodyHeader from './BodyHeader/BodyHeader';
class Body extends Component {
    render() {
        return (
            <div className='body-page'>
                <div>
                    <BodyHeader />
                </div>
                <div>
                    <BrandList />
                </div>

            </div>
        );
    }
}

export default Body;