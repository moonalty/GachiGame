import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store as globalStore } from "../../redux/store";
import { Provider } from "react-redux";
import React from "react";
import Login from "../Login/Login";
import Nav from "../Nav/Nav";
import Registration from "../Registration/Registration";
import Home from "../Home/Home";
import GameForm from "../GameForm/GameForm";
import QuestCard from "../QuestCard/QuestCard";
import ThemeCard from "../ThemeCard/ThemeCard";
import OpenModal from "../OpenModal/OpenModal";
import Profile from "../Profile/Profile";

function App() {
  return (
    <Provider store={globalStore}>
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* <Route path="/logput" */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/gameForm" element={<GameForm />} />
          <Route path="/gameForm/theme/quest/:id" element={<QuestCard />} />
          <Route path="/gameForm/themes/:id" element={<ThemeCard />} />
          <Route path="/gameForm/themes/:id/costs" element={<OpenModal />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
