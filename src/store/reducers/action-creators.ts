import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../../api/products-api';
import { fetchCartsByUsers } from '../../api/user-api';
import { IProduct } from '../../models/product';
import { IUser } from '../../models/user';
import { fetchProductInfo } from '../../api/info-product-api';

export const fetchProduct = createAsyncThunk<
    IProduct[],
    { q: string; skip: number },
    { rejectValue: string }
>('catalogData/fetchProduct', async ({ q, skip }, { rejectWithValue }) => {
    try {
        const data = await fetchProducts(q, skip);
        return data;
    } catch (error) {
        return rejectWithValue(`Server Error ${error}`);
    }
});

export const fetchCartsByUser = createAsyncThunk<
    IUser[],
    { id: number },
    { rejectValue: string }
>('carts/fetchUser', async ({ id }, { rejectWithValue }) => {
    try {
        const data = await fetchCartsByUsers(id);
        return data;
    } catch (e) {
        return rejectWithValue(`Error ${e}`);
    }
});

export const fetchProductsInfo = createAsyncThunk<
    IProduct[],
    { id: number },
    { rejectValue: string }
>('products/fetchProductInfo', async ({ id }, { rejectWithValue }) => {
    try {
        const data = await fetchProductInfo(id);
        return data;
    } catch (e) {
        return rejectWithValue(`Error ${e}`);
    }
});
