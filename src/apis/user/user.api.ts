import { axiosRequestOffice } from '../../common/config/axios.config';
import { User } from './user.entities';

export const getUser = async (id: string): Promise<User> => await axiosRequestOffice.get('user/' + id);
