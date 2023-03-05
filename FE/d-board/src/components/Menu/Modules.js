import React, { Component } from 'react';
import { FaCalendar } from 'react-icons/fa';
class Modules extends Component {
    render() {
        return (
            <div>
                <li>
                    <a className="" href="/dashboard/modules">
                        <button
                            className="text-xs py-3 rounded-lg text-white hover:bg-white/10 w-full flex gap-4 px-4 capitalize"
                            type="button">
                            <FaCalendar className='text-2xl' />
                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                                Modules
                            </p>
                        </button>
                    </a>
                </li>
            </div>
        );
    }
}

export default Modules;