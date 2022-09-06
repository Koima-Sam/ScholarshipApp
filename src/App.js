import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <h1>heloooooooooooooooooooooooooooooooo</h1>
      <Routes>
        <Route exact path = "/" element = {<Home />}/>
      </Routes>
    </div>
    
  );
}

export default App;
