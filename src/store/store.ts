import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productSlice from './reducers/product-slice';
import userSlice from './reducers/user-slice';
import { fetchProductInf } from 'api/info-product-api';
import { fetchLogin } from 'api/login-user';

const rootReducer = combineReducers({
    productSlice,
    userSlice,
    [fetchProductInf.reducerPath]: fetchProductInf.reducer,
    [fetchLogin.reducerPath]: fetchLogin.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware()
                .concat(fetchProductInf.middleware)
                .concat(fetchLogin.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
