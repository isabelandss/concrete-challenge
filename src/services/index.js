import axios from 'axios';
import configVariables from '../configuration';

import repo from './repo/repo';
import user from './user/user';

export const userService = user({ request: axios, configVariables});
export const repoService = repo({ request: axios, configVariables });