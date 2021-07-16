import {React, useState, useEffect} from 'react';
import axios from 'axios';
import './styles/output.css';
import Home from './components/Home';




const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers([...response.data])
      })
  }, [])
  return (
    <div>
      <Home users={users}/>
    </div>
  );
}

export default App;
