import React from 'react';
import Header from '../../components/Header';
import UserContent from '../../components/UserContent';
import RepositoryContent from '../../components/RepositoryContent';
import Footer from '../../components/Footer';
import './style.css';

class Result extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <UserContent />
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