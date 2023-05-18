import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/home";
import './App.css';
import LoginPage from "./components/auth/login";



function App() {
  return (
      <div className='app'>

        <Routes>
          {/*<Route element={PrivateRoute}>*/}
          <Route path='/' element={<Home/>}/>
          {/*</Route>*/}
          <Route path='login' element={<LoginPage/>}/>
        </Routes>
      </div>
  )


}

export default App;
