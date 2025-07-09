import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/more")
    .then(response => {
      setData(response.data);
      console.log(response);
    })
    .catch(err => {
      console.log(err)
    })
  },[])
  return (
    <div className="App">
      <h1>App</h1>
      {data && data.map(d => (
        <div key={d.id}>
          <p>{d.color}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
