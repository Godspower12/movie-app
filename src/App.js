import logo from './logo.svg';
import './App.css';
import MyImage from "./images/image6.jpg"

function App() {
  return (
    <div className="App">
     <h1>My movie app</h1>
     <button>Click Me</button>
     <h2>Author: Godspower Felix</h2>
     <img src= {MyImage} alt="profile-image"/>

    </div>
  );
}

export default App;
