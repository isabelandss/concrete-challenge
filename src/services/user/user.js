const token = '5fcf426202fc4088a3164c76e3a3570ec391517d';

export default ({request}) => ({
  getUser: async username => {
    const baseUrl = 'https://api.github.com/users';
    const { data } = await request.get(`${baseUrl}/${username}?access_token=${token}`);

    return data;
  }
});