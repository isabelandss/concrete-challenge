const token = '5fcf426202fc4088a3164c76e3a3570ec391517d';

const sumStargazersCount = repos =>
  repos.reduce((actualRepo, nextRepos) => actualRepo + parseInt(nextRepos.stargazers_count, 10), 0);

const orderRepos = repos =>
  repos.sort((actual, next) => next.stargazers_count - actual.stargazers_count);

export default ({request}) => ({
  getRepos: async username => {
    try {
      const baseUrl = 'https://api.github.com/users';
      const { data } = await request.get(`${baseUrl}/${username}/repos?access_token=${token}`);

      return {
        repositories: orderRepos(data),
        stars: sumStargazersCount(data)
      };

    } catch (error) {
      return error.response;
    }
  }
});