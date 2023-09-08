import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Signup = () => {
  const [user, setUser] = useState({});
  const iserror = {
    status: false,
  };
  const handleUser = (username) => {
    user.username = username;
  };
  const handleEmail = (mail) => {
    user.email = mail;
  };
  const handelPassword = (pass) => {
    user.password = pass;
  };
  const handelcPassword = (cpass) => {
    user.conformpassword = cpass;
  };
  const signup = () => {
    if (!(user.username && user.username.trim())) {
      iserror.status = true;
      toast.error('Enter valid username', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'dark',
      });
    }
    if (!(user.email && user.email.includes('@'))) {
      iserror.status = true;
      toast.error('Enter Valid Email', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'dark',
      });
    }
    if (!(user.password && user.password.trim())) {
      iserror.status = true;
      toast.error('Enter Valid Password', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'dark',
      });
    }
    if (!(user.password && user.password.length >= 8)) {
      iserror.status = true;
      toast.error('Enter Password With 8 letters or Above', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'dark',
      });
    }
    if (!(user.password === user.conformpassword)) {
      iserror.status = true;
      toast.error('Password and Conform password are notsame', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'dark',
      });
    }
    if (!iserror.status) {
      setUser(user);
      axios
        .get('https://dummyjson.com/produc', user)
        .then((res) => {
          toast.success('Registrered', {
            position: 'top-right',
            autoClose: 3000,
            theme: 'dark',
          });
        })
        .catch((err) => {
          toast.error('Registration Error', {
            position: 'top-right',
            autoClose: 3000,
            theme: 'dark',
          });
        });
    }
    // toast.success('Registrered', {
    //   position: 'top-right',
    //   autoClose: 3000,
    //   theme: 'dark',
    // });
    // else {
    //   toast.error('Registration Error', {
    //     position: 'top-right',
    //     autoClose: 3000,
    //     theme: 'dark',
    //   });
    // }
  };
  return (
    <div style={{ padding: '50px' }}>
      <div className="card container text-center" style={{ width: '50%' }}>
        <div className="card-body">
          <div className="card-title">
            <code>SIGNUP</code>
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
                  handleUser(e.target.value);
                }}
              />{' '}
            </div>
            <br />
            <div>
              {' '}
              <input
                type="email"
                placeholder="Enter Email"
                style={{ width: '50%' }}
                onChange={(e) => {
                  handleEmail(e.target.value);
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
                  handelPassword(e.target.value);
                }}
              />{' '}
            </div>
            <br />
            <div>
              {' '}
              <input
                type="password"
                placeholder="Enter Confrim password"
                style={{ width: '50%' }}
                onChange={(e) => {
                  handelcPassword(e.target.value);
                }}
              />{' '}
            </div>
            <br />
            <div>
              <button
                className="btn btn-success"
                onClick={() => {
                  signup();
                }}
              >
                Signup
              </button>
            </div>
          </div>
          <hr />
          <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
