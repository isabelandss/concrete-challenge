export default ({request}) => ({
  getRepos: async username => {
    const baseUrl = 'https://api.github.com/users';
    const { data } = await request.get(`${baseUrl}/${username}/repos`);
    
    return data;
  }
});