import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Games from "./pages/games";
import Home from "./pages/home";
import GameItem from "./pages/game-item";
import Forums from "./pages/forums";
import ForumItem from "./pages/forum-item";
import Contact from "./pages/contact";
import Header from "./components/header";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="games" element={<Games />} />
          <Route path="game-item" element={<GameItem />} />
          <Route path="forums" element={<Forums />} />
          <Route path="forum-item" element={<ForumItem />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  
);