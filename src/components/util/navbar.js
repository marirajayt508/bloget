import React from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = ({ name, admin, edit }) => {
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-light bg-dark p-3">
      <span class="navbar-brand mb-0 h1 text-light">{name}</span>
      {admin && !edit ? (
        <button
          className="btn btn-success"
          style={{ width: '100' }}
          onClick={() => navigate('/create')}
        >
          Create Post
        </button>
      ) : null}
      {!admin ? (
        <button className="btn btn-warning">View Profile</button>
      ) : null}
      {admin && edit ? (
        <div>
          <button
            className="btn btn-warning"
            style={{ width: '100' }}
            onClick={() => navigate('/create')}
          >
            Save
          </button>
          &nbsp;
          <button
            className="btn btn-danger"
            style={{ width: '100' }}
            onClick={() => navigate('/create')}
          >
            Delete
          </button>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
