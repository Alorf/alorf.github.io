import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { themeChange } from 'theme-change';

const Navbar = () => {
    const [check, setCheck] = useState(false);

    useEffect(() => {
        themeChange('');
    }, []);

    const handleClick = (e) => {
        setCheck(!check);
    };

    return (
        <div className="navbar bg-base-300">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    Accueil
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 justify-between items-center">
                    <li>
                        <Link to="/tp">Entrainement TP</Link>
                    </li>
                    <li>
                        <Link to="/acronym">Entrainement acronyme</Link>
                    </li>
                    <input type="checkbox" className="toggle" data-toggle-theme="dark,lofi" data-act-class="ACTIVECLASS" checked={check} onClick={handleClick}></input>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
