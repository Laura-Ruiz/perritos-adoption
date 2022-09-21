import React from 'react';
import './App.css';
import Main from './Components/Main'
import Home from './Components/Home'
import Profile from './Components/Profile';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Navbar from "./Components/Navbar";
import Dogs from './Components/Dogs';
import Map from './Components/Maps/Maps'
import { FavoriteProvider } from './context/favoritesContext';
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import Protected from "./Components/Protected";
import Posts from "./Components/Posts/Posts";
import { AuthProvider } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';
// import MainChat from "./Components/MainChat"

import FavoriteList from './Components/FavoriteList';
import HomeChat from './Components/HomeChat';


function App() {

  const [favorites, setFavorites] = useState([])

  console.log('favorites', favorites)

  const updateFavoriteDogs = (name) => {
    const updated = [...favorites];
    const isFavorite = favorites.indexOf(name);
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1)
    } else {
      updated.push(name);
    }
    setFavorites(updated);
  }

  return (
    <AuthProvider>
      <ChatContextProvider>
        <FavoriteProvider value={{
          favoriteDogs: favorites,
          updateFavoriteDogs: updateFavoriteDogs
        }}
        >
          <div className="App">
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/main" element={<Main />} />
                <Route path="/main/:id" element={
                  <Protected ><Dogs /></Protected>}
                />
                <Route path="/profile" element={<Profile />} />
                <Route path="/favorites" element={<FavoriteList />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/maps" element={<Map />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/chat" element={<HomeChat />} />
                {/* <Route path='/chat' element={<MainChat />} /> */}
              </Routes>
            </BrowserRouter>
          </div>
        </FavoriteProvider>
      </ChatContextProvider>
    </AuthProvider>
  );
}

export default App;