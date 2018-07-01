import React, { Component } from 'react';
import Input from '../../components/Input';
import { userService } from '../../services/user';
import { repoService } from '../../services/repo';
import './style.css';

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

  async onSubmit(event) {
    event.preventDefault();
    const user = await userService.getUser(this.state.search);
    const repos = await repoService.getRepos(this.state.search);

    this.props.history.push('/result', { user, repos });
  }

  render() {
    return (
      <div className="home-wrapper">
        <div className="home-search">
          <p className="logo">Github<span>Search</span></p>
          <Input onChange={this.onChange} onSubmit={this.onSubmit}/>
        </div>
      </div>
    );
  }
}

export default Home;