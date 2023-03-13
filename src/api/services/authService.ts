import { User } from '../../types/User';
import { authClient } from '../client/authClient';

type Register = (data: User) => Promise<User>;

const register: Register = ({ email, password }) => {
  return authClient.post('/registration', { email, password });
}

export const authService = {
  register,
};
