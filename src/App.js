import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Mukul Joshi</h1>
     <form action="http://localhost:3330/login?" method="post">
        <input type="text" name="name" id="'1" /><br/>
        <input type="password" name="password" id="2" /><br/>
        <input type="submit"/>
    </form>
    </div>
  );
}

export default App;
