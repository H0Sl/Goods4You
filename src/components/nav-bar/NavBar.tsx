import { useState } from 'react';
import cl from './NavBar.module.css';
import 'style/container.css';
import { Link } from 'react-router-dom';
import { Title } from 'components/UI/title';
import basket from 'img/basket.png';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import cn from 'classnames';
import { resetProducts } from 'store/reducers/product-slice';
import { useGetCurrentUserQuery } from 'api/login-user';
import { CartLoading } from 'components/cart-loading';

export const NavBar = () => {
    const dispatch = useAppDispatch();
    const { carts } = useAppSelector(state => state.userSlice);
    const [menuActive, setMenuActive] = useState(false);
    const { currentData } = useGetCurrentUserQuery();

    return (
        <CartLoading>
            <nav className={cl.navbar}>
                <div className="container">
                    <div className={cl.content}>
                        <Title
                            tag="h1"
                            fontSize="xl"
                            fontWeight="Bold"
                            className={cl.logo}
                        >
                            <Link to="/">Goods4you</Link>
                        </Title>
                        <div
                            className={
                                menuActive
                                    ? cn(cl.menuIcon, cl.active)
                                    : cl.menuIcon
                            }
                            onClick={() => setMenuActive(!menuActive)}
                        >
                            <span />
                        </div>
                        <div
                            className={
                                menuActive
                                    ? cn(cl.menuList, cl.active)
                                    : cl.menuList
                            }
                        >
                            <ul className={cl.list}>
                                <li className={cl.item}>
                                    <Link to="/#Catalog">Catalog</Link>
                                </li>
                                <li className={cl.item}>
                                    <Link to="/#FAQ">FAQ</Link>
                                </li>
                                <li className={cl.item}>
                                    <div className={cl.basket}>
                                        <Link
                                            to="/cart"
                                            onClick={() => {
                                                dispatch(resetProducts());
                                            }}
                                        >
                                            Cart
                                        </Link>
                                        <img src={basket} alt="" />
                                        {carts?.totalQuantity &&
                                        carts?.totalQuantity > 0 ? (
                                            <div className={cl.counter}>
                                                <span>
                                                    {carts.totalQuantity}
                                                </span>
                                            </div>
                                        ) : (
                                            <div />
                                        )}
                                    </div>
                                </li>
                                <li className={cl.item}>
                                    <Link
                                        to="/login"
                                        onClick={() => {
                                            dispatch(resetProducts());
                                        }}
                                    >
                                        {currentData?.firstName}{' '}
                                        {currentData?.lastName}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </CartLoading>
    );
};
