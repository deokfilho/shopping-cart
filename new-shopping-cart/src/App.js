import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [data, setData] = useState('null');
   useEffect(() => {
       const fetchJSON = async () => {
           const response = await fetch('/data/products.json');
           if (!response.ok) throw response;
            const json = await response.json();
           setData(json);
           // setSchedule(json);
       };
       fetchJSON();
   }, []);


  return (
      <div className="App">
      <pre>
      {JSON.stringify(data, null, 2)}
      </pre>
      </div>
  );
}

export default App;
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
{/*  </header>*/}
{/*</div>*/}