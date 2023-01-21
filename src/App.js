import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);
  }
  const toggleMode = ()=>{
  if(mode === 'light')
  {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been Enable","success");
      document.title="Textutils- Dark Mode"
  }
  else
  {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been Enable","success");
      document.title="Textutils- Light Mode"
  }
  }
  return (
    <>
   {/* <Navbar companytitle="Wixnix Technology" hometext="Home" servicetext="My Service" abouttext="About Us" contacttext="Contact Us" /> */}
  <Router>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} mode={mode}/>
      <Routes>
            <Route exact path="/About" element={<About mode={mode}/>}/>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Textutils - Word Counter, character Counter, Remove Extra Spaces" mode={mode}/>}/>
                
      </Routes>
  </Router> 
    </>
  );
}

export default App;
