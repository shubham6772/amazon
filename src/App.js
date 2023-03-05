import "./App.css";
import Header from "./componants/header/Header";
import Home from "./componants/home/Home";
import Checkout from "./componants/checkout/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './componants/login/Login'
import { useEffect } from "react";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";

function App() {

  const{state, dispatch} = useStateValue();

  useEffect(()=>{

    auth.onAuthStateChanged(authUser => {

          if(authUser){
          
            
            dispatch({
              type: "SET_USER",
              user: authUser
            })

          }else{
            
            dispatch({
              type: "SET_USER",
              user: null
            })

          }
    })
  },[])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={[<Header key={1}/>, <Home key={2} />]} />
           <Route path="/login" element={<Login/>} />
          <Route path="/checkout" element={[<Header key={1}/>,<Checkout key={2}/>]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
