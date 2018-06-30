import React from 'react';
import Header from '../../components/Header';
import UserContent from '../../components/UserContent';
import RepositoryContent from '../../components/RepositoryContent';
import Footer from '../../components/Footer';
import './style.css';
import { userService } from '../../services/user';
import { repoService } from '../../services/repo';

class Result extends React.Component {
  constructor() {
    super();

    this.state = {
      search: '',
      user: {},
      repos: []
    };
  }

  async componentDidMount() {
    const user = await userService.getUser('ortense');
    const repos = await repoService.getRepos('ortense');

    this.setState({
      user,
      repos
    });
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ search: value });
  }

  async onClick(event) {
    event.preventDefault();
    const user = await userService.getUser(this.state.search);
    const repos = await repoService.getRepos(this.state.search);

    this.setState({
      user,
      repos
    });
  }

  render() {
    const { user, repos } = this.state;
    return (
      <div>
        <Header 
          onChange={this.handleChange.bind(this)}
          onClick={this.onClick.bind(this)}
        />
        <div className="wrapper">
          <UserContent 
            name={user.name} 
            login={user.login}
            avatar_url={user.avatar_url}  
            followers={user.followers}
            following={user.following}
            bio={user.bio}
          />
          <section>
            {repos.map(repo => {
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
        <Footer/>
      </div>
    );
  }
}

export default Result;