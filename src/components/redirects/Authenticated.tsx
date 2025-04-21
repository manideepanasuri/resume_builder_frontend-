import userAuthStore from '@/store/userstore';
import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router';

type Props = {
  children: ReactNode;
};

export default function Authenticated({ children }: Readonly<Props>) {
  const { refreshjwt, reset } = userAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (refreshjwt === "") {
      reset();
      navigate("/login");
    }
  }, [refreshjwt]);

  return <>{children}</>;
}
