import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';

const App = () => (
  <div className='container'>
  <Router>
      <h1 className='heading'>POST WEBSITE</h1>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<PostList />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/edit/:id" element={<EditPost />} />
    </Routes>
  </Router>
  </div>
);

export default App;
