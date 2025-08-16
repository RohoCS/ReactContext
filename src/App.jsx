import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import Sidebar from "./components/Sidebar";
import Posts from "./pages/posts";
import Comments from "./pages/comments";
import Albums from "./pages/albums";
import Photos from "./pages/photos";
import Todos from "./pages/todos";
import Users from "./pages/users";
import PostDetail from "./pages/postDetalil";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/users" element={<Users />} />
        <Route path="/posts/:id" element={<PostDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
