import cl from './Header.module.css';
import 'style/container.css';
import { Button } from 'components/UI/button';
import { Link } from 'react-router-dom';
import { Text } from 'components/UI/text';

export const Header = () => {
    return (
        <header className={cl.header}>
            <div className="container">
                <div className={cl.main}>
                    <div className={cl.line} />
                    <Text tag="p" className={cl.mainText} fontSize="xxl">
                        Any products from famous brands
                        <br /> with worldwide delivery
                    </Text>
                    <Text tag="p" className={cl.text} fontWeight="semiBold">
                        We sell smartphones, laptops, clothes, shoes
                        <br />
                        and many other products at low prices
                    </Text>
                    <div className={cl.btn}>
                        <Link to="#Catalog">
                            <Button
                                className={cl.button}
                                view="text"
                                size="big"
                                variant="btnText"
                            >
                                <span className={cl.btnSpan}>
                                    Go to shopping
                                </span>
                            </Button>
                        </Link>
                    </div>
                </div>
                <span className={cl.backText}>Goods4you</span>
            </div>
        </header>
    );
};
