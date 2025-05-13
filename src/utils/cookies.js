import Cookies from 'js-cookie';

export const getUser = () => {
  const user = Cookies.get('user');
  return user ? JSON.parse(user) : { id: 'U123', name: 'Alex' };
};
