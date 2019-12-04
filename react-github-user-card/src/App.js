import React from 'react';
import axios from 'axios';
import './App.css';


class App extends React.Component {
  // you actually don't need a constructor 🤯
  state = {
    users: [],
    key: Date.now(),
    
  };

  componentDidMount() {
  
    axios.get('https://api.github.com/users/katrinafinney/followers').then(response => {
      console.log(response);
      this.setState({ users: response.data });
    });

  }
  

  render() {
    return (
      <div className="App container">
        
        <p className="headText">GitHub Usercard</p>
        
        <div className="users">
          {this.state.users.map(data => (
            <div className="card">
            <img width="200" src={data.avatar_url} key={data} alt={data} />
            <h3 className="name">{data.login}</h3>
            <p className="p">{data.location}</p>
            <br/>
            <a href={data.html_url} className="p">{data.html_url}</a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App