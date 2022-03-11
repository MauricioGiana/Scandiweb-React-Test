import React, { Component } from 'react';
import './App.css';


const query = `
query {
  categories {
    products {
      name
    }
  }
}`;
let data = {};
fetch("http://localhost:4000/", {
  method: 'POST',
  headers: {
    "content-type": "application/json",
    "accept": "application/json"
  },
  body: JSON.stringify({ query })
}).then(res => res.json()).then(res => {
  data = res.data;
  console.log(data);
});

class App extends Component {

  componentDidMount() {
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <h1>Scandiweb React Test</h1>
      </div>
    )
  }
}

export default App;
