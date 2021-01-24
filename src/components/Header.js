import React from 'react';
import { Link } from 'react-router-dom';

const Hearder = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/tv">
                        Tv
                    </Link>
                </li>
                <li>
                    <Link to="/search">
                        Search
                    </Link>
                </li>

            </ul>

        </header>
    );
};

export default Hearder;
