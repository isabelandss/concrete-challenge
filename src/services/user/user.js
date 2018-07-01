import config from '../../configuration';

export default ({request}) => ({
  getUser: async username => {
    try {
      const { data } = await request.get(`${config.github_api_url}/users/${username}`, {
        headers: {
          'Authorization': `token ${config.access_token}`
        }
      });
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
});