import React from 'react';
import cl from './NavBar.module.css';
import '../../style/container.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className={cl.navbar}>
            <div className="container">
                <div className={cl.content}>
                    <div className={cl.logo}>
                        <Link to="/">Goods4you</Link>
                    </div>
                    <div className={cl.items}>
                        <ul>
                            <li className={cl.item}>
                                <Link to="/#Catalog">Catalog</Link>
                            </li>
                            <li className={cl.item}>
                                <Link to="/#FAQ">FAQ</Link>
                            </li>
                            <li className={cl.item}>
                                <Link to="/cart">Cart</Link>
                            </li>
                            <li className={cl.item}>
                                <a href="#">Johnson Smith</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
