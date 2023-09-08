import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getToken } from '.././redux/signinSlice';
import jwt_decode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    dispatch(getToken());
  }, []);
  const navigate = useNavigate();

  const state = useSelector((state) => state);

  const login = () => {
    const iserror = {
      status: false,
    };
    if (!username.trim()) {
      iserror.status = true;
      toast.error('Enter valid username', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'dark',
      });
    }
    if (!password.trim('@')) {
      iserror.status = true;
      toast.error('Enter Valid Password', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'dark',
      });
    }

    if (!iserror.status) {
      let data = {
        username,
        password,
      };

      dispatch(getToken(data));
      const decoded = jwt_decode(state.token.token);
      if (decoded.role == 'admin') {
        navigate('/admin?aut=' + state.token.token);
      } else {
        navigate('/user?aut=' + state.token.token);
      }

      if (state.token.error) {
        toast.error('Login Error', {
          position: 'top-right',
          autoClose: 3000,
          theme: 'dark',
        });
      } else {
        toast.success('Loggedin', {
          position: 'top-right',
          autoClose: 3000,
          theme: 'dark',
        });
      }
    }
  };
  return (
    <div style={{ padding: '50px' }}>
      <div className="card container text-center" style={{ width: '50%' }}>
        <div className="card-body">
          <div className="card-title">
            <code>LOGIN</code>
          </div>
          <hr />
          <div>
            <div>
              {' '}
              <input
                type="text"
                placeholder="Enter username"
                style={{ width: '50%' }}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />{' '}
            </div>
            <br />

            <div>
              {' '}
              <input
                type="password"
                placeholder="Enter password"
                style={{ width: '50%' }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />{' '}
            </div>
            <br />
            <div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  login();
                }}
              >
                {state.token.loading && !state.token.error ? (
                  <div class="spinner-border spinner-border-sm  text-light"></div>
                ) : (
                  <span>Login</span>
                )}
              </button>
            </div>
          </div>
          <hr />
          <Link to="/signup">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
