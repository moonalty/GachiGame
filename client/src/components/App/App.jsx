import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store as globalStore } from '../../redux/store'
import { Provider } from 'react-redux'
import Nav from '../Nav/Nav'
import React from 'react';
import Login from '../Login/Login';
import Home from '../Home/Home'
import GameForm from '../GameForm/GameForm';
import QuestCard from '../QuestCard/QuestCard';
import ThemeCard from '../ThemeCard/ThemeCard';



function App() {
  return (
      <Provider store={globalStore}>
        <BrowserRouter>
          <Nav />
          <Routes >
            <Route path="/login" element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/gameForm' element={<GameForm />} />
            <Route path='/gameForm/theme/quest/:id' element={<QuestCard />} />
            <Route path='/gameForm/themes/:id' element={<ThemeCard/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
