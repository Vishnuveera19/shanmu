import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect,useState } from 'react';
import JsonTable from './jsoncomp';

function App() {
  
  const [post, setPost] = useState([{}]);
  useEffect(() => {
    axios.get("https://localhost:7266/api/PayInputs").then((response) => {
      
      setPost(response.data);
    });
  }, []);
  {
    console.log(post)
  }
       return <div><JsonTable jsonData={post}/></div>

}

export default App;
