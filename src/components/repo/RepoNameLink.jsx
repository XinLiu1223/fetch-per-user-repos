import React from 'react';

class RepoNameLink extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    const { gitReposList } = this.props;
    return (
      <>
        {gitReposList.length &&
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Link</th>
              </tr>
            </thead>
            <tbody>
              {gitReposList.map((repo, index) =>
                  <tr key={repo.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{repo.name}</td>
                    <td><a href={`${repo.html_url}`} target="_blank">{repo.html_url}</a></td>
                  </tr>
              )
              }
            </tbody>
          </table>
        }
      </>
    );
  }
}

export {RepoNameLink};
