export default ({request, configVariables}) => ({
  getUser: username => {
    return request.get(`${configVariables.github_api_url}/users/${username}`, {
      headers: {
        'Authorization': `token ${configVariables.access_token}`
      }
    })
    .then(user => user.data)
    .catch(error => {
      console.log(`erro : ${error}`);
      throw error;
    })
  }
});