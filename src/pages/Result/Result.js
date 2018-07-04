import React from 'react';
import { Header, UserContent, RepositoryContent, Footer, NotFound } from '../../components';
import { userService, repoService } from '../../services';
import './style.css';

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
    this.mountObjectUserDetail = this.mountObjectUserDetail.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
    Promise.all([
      userService.getUser(this.state.search),
      repoService.getRepos(this.state.search)
    ]).then((retorno) => {
      const [ user, repos ] = retorno;

      this.setState({
        user,
        repos,
        found: true,
      });
    }).catch(error => {
      this.setState({
        found: false
      });
    });
  }

  mountObjectUserDetail() {
    const { user, repos } = this.state;
    return {
      company: user.company,
      location: user.location,
      stars: repos.stars,
      public_repos: user.public_repos,
      followers: user.followers,
      bio: user.bio,
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
        {this.state.found ?
          <div className="wrapper">
            <UserContent
              name={user.name}
              login={user.login}
              avatar_url={user.avatar_url}
              user={this.mountObjectUserDetail()}
            />
            <section>
              {
                repos.repositories.map(repo =>
                  <RepositoryContent
                    name={repo.name}
                    description={repo.description}
                    stars={repo.stargazers_count}
                    html_url={repo.html_url}
                    key={repo.id}
                  />
                )
              }
            </section>
          </div>
          : <div className="wrapper-notfound">
            <NotFound />
          </div>}
        <Footer className={this.state.found ? '' : 'fixed'} />
      </div>
    );
  }
}

export default Result;