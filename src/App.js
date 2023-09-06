
import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video"; 
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Shorts from './pages/Shorts'
import Subscription from './pages/Subscription'
import Library from './pages/Library'
import History from './pages/History'
import YourVideos from './pages/YourVideos'
import WatchLater from './pages/WatchLater'
import LikedVideos from './pages/LikedVideos'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'


function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <SideBar >
    <Routes style={{marginTop:'10%'}}>
      <Route path="/" element={<Home />}/>
      <Route path="/Video" element={<Video />}/>
      <Route path="/shorts" element={<Shorts />}/>
      <Route path="/subscription" element={<Subscription />}/>
      <Route path="/library" element={<Library />}/>
      <Route path="/history" element={<History />}/>
      <Route path="/yourvideos" element={<YourVideos />}/>
      <Route path="/watchlater" element={<WatchLater />}/>
      <Route path="/likedvideos" element={<LikedVideos />}/>
      
    </Routes>
   </SideBar>
    </BrowserRouter>
  );
}

export default App;
