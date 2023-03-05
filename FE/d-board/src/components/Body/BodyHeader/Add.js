import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
class Add extends Component {
    render() {
        return (
            <div>
                <div className='body-add'>
                    <div
                        className="text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 w-full flex gap-4 px-4 capitalize"
                        type="button"
                        style={{ position: "relative", overflow: "hidden" }}
                    >
                        <button>
                            <FaPlus className='text-xl' />
                        </button>
                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                            Add Brand
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Add;