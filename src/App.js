import React, {useState, useEffect} from 'react';
import Api from './api'

// .catch(error => console.log(error))
// Script2 package.json --> "deploy": "cp -a BlockCovidWeb/build/. public/", test
const App = () => {
  const [bears, setBears] = useState([]);
  const [users, setUsers] = useState([]);
  
  /*
  useEffect(() => {
    
    axios.get('/api/bears')
        .then(res => setBears(res.data))
  }, []);
  */
 
  
 useEffect(() => {
  Api
      .getAllBears()
      .then(initialApi => {
          console.log('promise fulfilled')
          setBears(initialApi)
      })
}, [])

useEffect(()=> {
  Api
      .getAllUsers()
      .then(initialApi=> {
        console.log('promise fulfilled')
        setUsers(initialApi)
      })
},[])


  

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
        
        <div>
        <h2> Users </h2>
        <ul>
          {users.map((user,id) => {
            return (
              <li key={id}>
                Name : {user}
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
