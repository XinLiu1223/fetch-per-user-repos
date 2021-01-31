import React from 'react';
import UserService from '../../services/user.service';
import { RepoNameLink } from '../repo/RepoNameLink';
import './HomePage.css';

class HomePage extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      gituser: '',
      reposList: [],
    };
  }

  handleChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value
      }
    )
  }

  searchClicked = () => {
    console.log(this.state.gituser);
    UserService.retrieveUserRepos(this.state.gituser)
      .then(
        response => {
            console.log(response.data);
            this.setState({ reposList: response.data });
            console.log(this.state.reposList);
        }
      );
  }

  render() {
    return (
      <>
        <div className="col-md-12">
          <div className="container user-serch">
            Git User Name: <input type="text" name="gituser" value={this.state.gituser} onChange={this.handleChange} />
            <button className="btn btn-success user-search-button" onClick={this.searchClicked}>Search</button>
          </div>
        </div>
        <div className="col-md-12">
          <RepoNameLink gitReposList={this.state.reposList}/>
        </div>
      </>
    );
  }
}

export {HomePage};
