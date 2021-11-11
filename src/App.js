import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'
import AllFood from './pages/AllFood';
import Layout from './components/Layout/Layout';
import MyCart from './pages/MyCart';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <Layout>
      <Switch>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/register'>
        <Register/>
      </Route>
      <Route path="/allfoods">
        <AllFood/>
      </Route>
      <Route path="/mycart">
        <MyCart/>
      </Route>
      </Switch>
    </Layout>
  );
}

export default App;
