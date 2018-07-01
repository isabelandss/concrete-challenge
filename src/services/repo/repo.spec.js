import repo from './repo';
import axios from "axios";

describe('Teste unitário do serviço de repositório', () => {
  const repoService = repo({request: axios});

  test('Testando a função getRepos', async () => {
    const repos = await repoService.getRepos('isabelandss');
    expect(repos).toBeInstanceOf(Array);
  });

  test('Testando quando o usuário não tem repositórios', async () => {
    const repos = await repoService.getRepos('mecontratacs');
    expect(repos).toBeInstanceOf(Object);
    expect(repos.data.message).toEqual('Not Found');
  });
});