import { React, useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import './styles/output.css';
import Router from './components/Router';

const App = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
        (async () => {
            try {
                const data = await axios.get('https://jsonplaceholder.typicode.com/users')
                setUsers(data.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error)
            }
        })();
    }, [])

  return (
    <BrowserRouter>
      {!isLoading ?
        <div>
          <Router users={users}/>
        </div> :
        <div className="flex h-screen items-center justify-center">
          <p className="text-lg">Loading data from the server....</p>
        </div>
        }
      
    </BrowserRouter> 
  );
}

export default App;
