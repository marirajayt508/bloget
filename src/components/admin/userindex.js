import React, { useEffect } from 'react';
import Navbar from '.././util/navbar';
import Showposted from './showpostes';
import { getPosts } from '.././redux/getBlogsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
const Userindex = () => {
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const [searchParams] = useSearchParams();
  const aut = searchParams.get('aut');
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const name = 'user';
  const navigate = useNavigate();
  const role = aut ? jwt_decode(aut).role : true;
  const authen = () => {
    if (!(aut && role)) {
      navigate('/');
    } else {
      return (
        <>
          <Navbar name={name} />
          {!state.blogs.error ? (
            <Showposted data={state.blogs} />
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

export default Userindex;
