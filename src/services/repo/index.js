import axios from 'axios';
import repo from './repo';

export const repoService = repo({ request: axios });