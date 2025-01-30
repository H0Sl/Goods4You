import { useEffect } from 'react';
import { useAppDispatch } from 'hooks/redux';
import { fetchCartsByUser } from 'store/reducers/action-creators';

export const useCartLoading = (id: number) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const source = dispatch(fetchCartsByUser({ id: id }));
        return () => {
            source.abort();
        };
    }, [dispatch]);
};
