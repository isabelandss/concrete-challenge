import React from 'react';
import Header from '../../components/Header';
import UserContent from '../../components/UserContent';
import RepositoryContent from '../../components/RepositoryContent';
import Footer from '../../components/Footer';
import NotFound from '../../components/NotFound';
import './style.css';
import { userService } from '../../services/user';
import { repoService } from '../../services/repo';

class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      user: {},
      repos: { repositories: [], stars: 0 },
      found: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { user, repos, found } = this.props.location.state;

    this.setState({
      user,
      repos,
      found
    });
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ search: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const user = await userService.getUser(this.state.search);
      const repos = await repoService.getRepos(this.state.search);

      this.setState({
        user,
        repos,
        found: true,
      });

    } catch (error) {
      this.setState({
        found: false
      });
    }
  }

  render() {
    const { user, repos } = this.state;
    return (
      <div>
        <Header
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        { this.state.found ?
          <div className="wrapper">
            <UserContent
              name={user.name}
              login={user.login}
              avatar_url={user.avatar_url}
              user={
                {
                  company: user.company,
                  location: user.location,
                  stars: repos.stars,
                  public_repos: user.public_repos,
                  followers: user.followers,
                  bio: user.bio
                }
              }
            />
            <section>
              {repos.repositories.map(repo => {
                return (
                  <RepositoryContent
                    name={repo.name}
                    description={repo.description}
                    stars={repo.stargazers_count}
                    key={repo.id}
                  />)
              })}
            </section>
          </div>

          : <NotFound />}
        <Footer/>
      </div>
    );
  }
}

export default Result;