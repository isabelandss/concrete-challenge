import config from '../../configuration';

export default ({request}) => ({
  getUser: username => {
    return request.get(`${config.github_api_url}/users/${username}`, {
      headers: {
        'Authorization': `token ${config.access_token}`
      }
    })
    .then(user => user.data)
    .catch(error => {
      console.log(`erro : ${error}`);
      throw error;
    })
  }
});