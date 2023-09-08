import React, { useEffect, useState } from 'react';
import Navbar from '.././util/navbar';
import Showposted from './showpostes';
import { getPosts } from '.././redux/getBlogsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
const Adminindex = () => {
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const aut = searchParams.get('aut');
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const admin = true;
  const name = 'Admin';
  const navigate = useNavigate();
  const role = aut ? jwt_decode(aut).role : true;
  const authen = () => {
    if (!(aut && role)) {
      navigate('/');
    } else {
      return (
        <>
          <Navbar name={name} admin={admin} />
          {!state.blogs.error ? (
            <Showposted data={state.blogs} admin={admin} />
          ) : (
            <div className="text-center p-5 m-3">
              <strong className="text-danger">ERROR IN RESPONCE</strong>
            </div>
          )}
        </>
      );
    }
  };
  return authen();
};

export default Adminindex;
