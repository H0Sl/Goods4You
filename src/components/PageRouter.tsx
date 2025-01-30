import { Route, Routes } from 'react-router-dom';
import { Product } from 'pages/Product';
import { Home } from 'pages/Home';
import { Cart } from 'pages/Cart';
import { Login } from 'pages/Login';
import { AuthCheck } from './auth-check';

const PageRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route
                path="/"
                element={
                    <AuthCheck>
                        <Home />
                    </AuthCheck>
                }
            />
            <Route
                path="/product/:id"
                element={
                    <AuthCheck>
                        <Product />
                    </AuthCheck>
                }
            />
            <Route
                path="/cart"
                element={
                    <AuthCheck>
                        <Cart />
                    </AuthCheck>
                }
            />
            <Route path="/*" element={<Home />} />
        </Routes>
    );
};

export default PageRouter;
