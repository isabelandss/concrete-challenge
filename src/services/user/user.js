export default ({request}) => ({
  getUser: async username => {
    const baseUrl = 'https://api.github.com/users';
    const { data } = await request.get(`${baseUrl}/${username}`);

    return data;
  }
});