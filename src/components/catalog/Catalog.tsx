import { ChangeEvent, useEffect, useState } from 'react';
import 'style/container.css';
import cl from './Catalog.module.css';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { resetProducts } from 'store/reducers/product-slice';
import { fetchProduct } from 'store/reducers/action-creators';
import { Title } from 'components/UI/title';
import { Input } from 'components/UI/input';
import { Text } from 'components/UI/text';
import { CatalogItem } from 'components/catalog-item';
import { Button } from 'components/UI/button';

export const Catalog = () => {
    const dispatch = useAppDispatch();
    const { catalogData, isLoading, error, skip, total } = useAppSelector(
        state => state.productSlice,
    );

    const [searchValue, setSearchValue] = useState<string>('');

    const search = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
        dispatch(resetProducts());
    };

    const showMore = () => {
        dispatch(
            fetchProduct({
                q: searchValue,
                skip: skip + 12,
            }),
        );
    };

    useEffect(() => {
        const sourceProduct = dispatch(
            fetchProduct({ q: searchValue, skip: skip }),
        );
        return () => {
            sourceProduct.abort();
        };
    }, [searchValue]);

    return (
        <section className={cl.catalog} id="Catalog">
            <div className="container">
                <Title
                    tag="h1"
                    fontSize="xxl"
                    fontWeight="Bold"
                    className={cl.title}
                >
                    Catalog
                </Title>
                <div className={cl.input}>
                    <Input
                        onChange={search}
                        value={searchValue}
                        placeholder="Search by title"
                    />
                </div>
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>{error}</h1>}
                {catalogData?.products.length === 0 ? (
                    <Text
                        className={cl.noElements}
                        fontSize="xl"
                        fontWeight="medium"
                        tag="p"
                    >
                        No Products
                    </Text>
                ) : (
                    <div className={cl.content}>
                        {catalogData.products.map(product => (
                            <Link
                                key={product.id}
                                to={`/product/${product.id}`}
                                onClick={() => dispatch(resetProducts())}
                            >
                                <CatalogItem product={product} />
                            </Link>
                        ))}
                    </div>
                )}
                {catalogData.products.length >= total ? (
                    <div />
                ) : (
                    <div className={cl.btn}>
                        {}
                        <Button
                            className={cl.button}
                            view="text"
                            size="small"
                            onClick={showMore}
                            variant="btnText"
                        >
                            <span className={cl.btnSpan}>Show more</span>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};
