import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Ladysuzan from "./components/Ladysuzan";
import Infowindow from "./components/Infowindow";
import ChatAssistant from "./components/ChatAssistant";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <ChatAssistant/>
      <Home/>
    </div>
  );
}

export default App;
