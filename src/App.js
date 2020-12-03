import React, {useState, useEffect} from 'react';
import axios from 'axios'
// .catch(error => console.log(error))
// Script2 package.json --> "deploy": "cp -a BlockCovidWeb/build/. public/", test
const App = () => {
  const [bears, setBears] = useState([]);
  useEffect(() => {
    axios.get('/api/bears')
        .then(res => setBears(res.data))
       
  }, []);
  return (
      <div className="App">
        <h2>Bears in Canada:</h2>
        <div>
          <ul>
            {bears.map((b,idx) => {
              return (
                  <li key={idx}>
                     {b}
                  </li>
              )
            })}
          </ul>
        </div>
      </div>
  );
}

export default App;

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and Test Pipeline without yarn
        </a>
      </header>
    </div>
  );
}

export default App*/
