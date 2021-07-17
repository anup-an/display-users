import { React, useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import './styles/output.css';
import Router from './components/Router';

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
        (async () => {
            try {
                const data = await axios.get('https://jsonplaceholder.typicode.com/users')
                setUsers(data.data);
            } catch (error) {
                console.log(error)
            }
        })();
    }, [])

  return (
    <BrowserRouter>
      <div>
        <Router users={users}/>
      </div>
    </BrowserRouter> 
  );
}

export default App;
