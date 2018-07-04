import repo from './repo';
import axios from 'axios';
import config from '../../configuration';

describe('Teste unitário do serviço de repositório', () => {
  const configVariables = {
    github_api_url: config.github_api_url,
    access_token: config.access_token,
  };

  test('Testando a função getRepos', async () => {
    const repoService = repo({ request: axios, configVariables });
    const repos = await repoService.getRepos('isabelandss');
    expect(repos).toBeInstanceOf(Object);
  });

  test('Testando quando o usuário não tem repositórios', async () => {
    const repoService = repo({ request: axios, configVariables });
    expect(repoService.getRepos('mecontratacs')).rejects.toEqual({ data: { message: 'Not found' } });
  });
});