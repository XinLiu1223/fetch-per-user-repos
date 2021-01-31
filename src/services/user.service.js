import axios from 'axios';

class UserService {
  
  retrieveUserRepos(gitUserName) {
      return axios.get(`https://api.github.com/users/${gitUserName}/repos`);
  }

}

export default new UserService();
