import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();

  const handlePush = (url: string) => {
    navigate(url);
  };

  const handlePushAutoCall = (url: string) => () => {
    navigate(url);
  };

  return { handlePush, handlePushAutoCall };
};
