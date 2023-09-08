import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '.././components/users/login';
import Signup from '.././components/users/signup';
import Adminindex from '.././components/admin/adminindex';
import Userindex from '.././components/admin/userindex';
import Createpost from '.././components/admin/createpost';
import Editpost from '.././components/admin/editpost';
import Viewpost from '.././components/admin/viewpost';

const BlogRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/admin" exact element={<Adminindex />} />
        <Route path="/user" exact element={<Userindex />} />
        <Route path="/create" element={<Createpost />} />
        <Route path="/edit" element={<Editpost />} />
        <Route path="/view" element={<Viewpost />} />
      </Routes>
    </Router>
  );
};

export default BlogRoute;
