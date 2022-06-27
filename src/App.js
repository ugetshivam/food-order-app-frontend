import React, { useEffect, useState } from 'react'
import './App.css';
import { Route, Switch,Redirect } from 'react-router-dom';

import AllFoods from './pages/AllFoods';
import MyCart from './pages/MyCart';
import Layout from './components/Layout/Layout';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import axios from 'axios';
const App = () => {
  const[exist, setExist] = useState(false);
  useEffect(()=>{
    async function getUser(){
      await axios.get('http://localhost:8000/getuser', {withCredentials: true})
      .then((res)=>{
        console.log(res.data);
        if(exist === false){
        setExist(true);
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    getUser();
  }, [exist]);
  console.log(exist);
  return (
    <Layout exist={exist} setExist={setExist}>
      <Switch>
        {exist?
        <Route path="/" exact>
          <Redirect to="/allfoods" />
        </Route>:<Route path="/" exact><Redirect to="/login"/></Route>
        }
       <Route path="/allfoods">
         <AllFoods/>
        </Route>
        <Route path="/my-cart">
          <MyCart/>
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
        <Route path="/login">
          <Login exist={exist} setExist={setExist}/>
        </Route>
      </Switch>
    </Layout>
     )
}

export default App