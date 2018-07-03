import React, { Component } from 'react';
import Input from '../../components/Input';
import { userService } from '../../services/user';
import { repoService } from '../../services/repo';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      user: {},
      repos: []
    }
  }

  onChange(event) {
    const { value } = event.target;
    this.setState({ search: value });
  }

  onSubmit(event) {
    event.preventDefault();
    Promise.all([
      userService.getUser(this.state.search),
      repoService.getRepos(this.state.search)
    ]).then((retorno) => {
      const [ user, repos ] = retorno;
      this.props.history.push('/result', { user, repos, found: true });
    }).catch(error => {
      this.props.history.push('/result', { found: false });
    });
  }

  render() {
    return (
      <div className="home-wrapper">
        <div className="home-search">
          <p className="logo">Github<span>Search</span></p>
          <Input onChange={this.onChange} onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

export default Home;