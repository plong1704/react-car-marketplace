import React, { Component } from 'react';
import Add from './Add';
import './BodyHeader.css'
import Search from './Search';
class BodyHeader extends Component {
    render() {
        return (

            <div className='body-header'>
                <div className="body-listp relative bg-clip-border mx-4 -mt-6 p-6">
                    <h6 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-relaxed">
                        CAR BRANDS LIST
                    </h6>
                </div>
                <Search />
                <Add />
            </div>
        );
    }
}

export default BodyHeader;