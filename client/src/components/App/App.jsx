import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store as globalStore } from '../../redux/store'
import { Provider } from 'react-redux'
import Nav from '../Nav/Nav'
import React from 'react';
import Login from '../Login/Login';

function App() {
  return (
    <>
    <Provider store={globalStore}>
      <BrowserRouter>
        <Nav />
        <Routes >
            <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
