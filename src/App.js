import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

const App = () => {

  const [users, setUsers] = useState([]);

  const Domain = "put your domain of auth0";
  const AuthorizationTokenOfManagement = "get the token at auth0 dashboard apis/management/explorer"

  const getUsers = async () => {
    const data = await axios.get(`https://${Domain}/api/v2/users?page=1`, {
      headers: {
        authorization: `Bearer ${AuthorizationTokenOfManagement}`
      }
    })
    setUsers(data.data);
  }

  const deleteUsers = async () => {
    for ( let a = 0; a < users.length; a++ ) {
      await axios.delete(`https://${Domain}/api/v2/users/${users[a].user_id}`, {
        headers: {
          authorization: `Bearer ${AuthorizationTokenOfManagement}`
        }
      })
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => getUsers()}>Get Users</button>
        <button onClick={() => deleteUsers()}>Delete users</button>
      </header>
    </div>
  );
}

export default App;
