import { useAppSelector } from 'hooks/redux';
import cl from './ContentCart.module.css';
import { Title } from 'components/UI/title';
import { CartProduct } from 'components/cart-product';
import { CartPrice } from 'components/cart-price';

export const ContentCart = () => {
    const { carts } = useAppSelector(state => state.userSlice);

    return (
        <section>
            <div className="container">
                <div className={cl.cart}>
                    <Title
                        tag="h1"
                        fontSize="xxl"
                        fontWeight="Bold"
                        className={cl.titleText}
                    >
                        My cart
                    </Title>
                    {carts?.totalProducts > 0 ? (
                        <div className={cl.content}>
                            <CartProduct cart={carts} />
                            <CartPrice cart={carts} />
                        </div>
                    ) : (
                        <div className={cl.noElement}>No Items</div>
                    )}
                </div>
            </div>
        </section>
    );
};
