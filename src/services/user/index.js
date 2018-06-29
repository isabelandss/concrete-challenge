import axios from 'axios';
import user from './user';

export const userService = user({ request: axios });