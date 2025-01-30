import { useGetCurrentUserQuery } from 'api/login-user';
import { useCartLoading } from 'hooks/useCartLoading';

export const CartLoading = ({ children }: { children: React.ReactNode }) => {
    const { currentData } = useGetCurrentUserQuery();
    const id: number = currentData?.id ?? 0;

    useCartLoading(id);

    return <>{children}</>;
};
