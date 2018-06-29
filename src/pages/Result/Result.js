import React from 'react';
import Header from '../../components/Header';
import UserContent from '../../components/UserContent';
import RepositoryContent from '../../components/RepositoryContent';
import Footer from '../../components/Footer';
import './style.css';
import { userService } from '../../services/user';

class Result extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {},
      repos: {}
    };
  }

  async componentDidMount() {
    const user = await userService.getUser('barbaromatrix');
    console.log(user);

    this.setState({
      user
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <UserContent 
            name={this.state.user.name} 
            login={this.state.user.login}
            avatar_url={this.state.user.avatar_url}  
            followers={this.state.user.followers}
            following={this.state.user.following}
            bio={this.state.user.bio}
          />
          <section>
            <RepositoryContent />
            <RepositoryContent />
            <RepositoryContent />
            <RepositoryContent />
          </section>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Result;