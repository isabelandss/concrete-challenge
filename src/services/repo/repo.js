import config from '../../configuration';

const sumStargazersCount = repos =>
  repos.reduce((actualRepo, nextRepos) => actualRepo + parseInt(nextRepos.stargazers_count, 10), 0);

const orderRepos = repos =>
  repos.sort((actual, next) => next.stargazers_count - actual.stargazers_count);

export default ({request}) => ({
  getRepos: async username => {
    try {
      const { data } = await request.get(`${config.github_api_url}/users/${username}/repos`, {
        headers: {
          'Authorization': `token ${config.access_token}`
        }
      });

      return {
        repositories: orderRepos(data),
        stars: sumStargazersCount(data),
      };

    } catch (error) {
      console.log(error);
      return error.response;
    }
  }
});