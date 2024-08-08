import "./App.css";
import Alert from "./compoents/Alert";
// import About from "./compoents/About";
import Navbar from "./compoents/Navbar";
import TextForm from "./compoents/TextForm";
import React, {useState} from 'react'

// import {
//   BrowserRouter as Router,
//   // Switch,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [style, setstyle] = useState({backgroundColor : 'light',
    color : 'black'})
  const toggle =()=> {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setstyle({backgroundColor : '#042743',
        color : 'white'})
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setstyle({backgroundColor : 'white',
        color : '#042743'})
        

    }


}

const [alert, setAlert] = useState(null)

const showAlert = (messsage, status)=> {
  setAlert({
    msg : messsage,
    status : status
  })
setTimeout(()=>{setAlert(null)}, 2000);
}


  return (
    <>
    {/* <Router> */}
          <Navbar title="MyApp" toggle={toggle} mode={mode} style={style} abttxt= "its abt me"/>
          <Alert alert={alert}/>
          <div className="container">
          {/* <Routes>
          <Route exact path="/about" element={<About/>}>          </Route>
          <Route exact path="/" element={ <TextForm heading="EnterYour text" mode={mode} style={style} showAlert={showAlert}/> }>                  </Route>
        </Routes> */}
        <TextForm heading="EnterYour text" mode={mode} style={style} showAlert={showAlert}/>
        {/* <About/> */}
          
          </div>
         


    {/* </Router> */}

    </>
  );
}

export default App;
