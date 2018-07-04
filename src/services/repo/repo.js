const sumStargazersCount = repos =>
  repos.reduce((actualRepo, nextRepos) => actualRepo + parseInt(nextRepos.stargazers_count, 10), 0);

const orderRepos = repos =>
  repos.sort((actual, next) => next.stargazers_count - actual.stargazers_count);

export default ({request, configVariables}) => ({
  getRepos: username => {
    return request.get(`${configVariables.github_api_url}/users/${username}/repos`, {
      headers: {
        'Authorization': `token ${configVariables.access_token}`
      }
    })
    .then(repositories => ({
      repositories: orderRepos(repositories.data),
      stars: sumStargazersCount(repositories.data)
    }))
    .catch(error => {
      console.log(`erro : ${error}`);
      throw error;
    });
  }
});