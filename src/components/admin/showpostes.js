import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Loading from '.././util/loading';

const Showposted = ({ data, admin }) => {
  const [blogspost, setBlogs] = useState([]);
  const [post, findPost] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setBlogs(data.datas.products);
  });

  const adminRoute = () => {
    navigate('/edit?token=djksaashdjk&&id=1');
  };
  const userRoute = () => {
    navigate('/edit?token=djksaashdjk&&id=1');
  };
  const findvalue = (value) => {
    let temp = blogspost.filter((res) => {
      return res.title.toLowerCase().includes(value);
    });

    if (value) {
      findPost([...temp]);
    } else {
      findPost([]);
    }
  };
  const blogs = () => {
    return (
      <>
        <div className="row ">
          <div className="col-md-2 p-3">
            <strong>Find Post</strong>
            <input
              type="text"
              placeholder="Enter Title"
              onChange={(e) => {
                findvalue(e.target.value);
              }}
            />
            {post.length ? (
              <div className="p-3">
                <strong>Releated Post</strong>
                {post.map((res) => {
                  return (
                    <div>
                      <Link>{res.title}</Link>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
          <div className="col-md-10">
            <div class="card container p-3">
              <hr />
              <strong>All Blogs</strong>
              <div class="row p-3">
                {blogspost &&
                  blogspost.map((value, index) => {
                    return (
                      <div class="col-lg-3 col-md-12 mb-4 mb-lg-0 p-3">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">{value.title}</h5>
                            <p class="card-text">{value.description}</p>
                            <button
                              type="button"
                              class={`btn btn-${admin ? 'primary' : 'success'}`}
                              onClick={() => {
                                admin ? adminRoute() : userRoute();
                              }}
                            >
                              {admin ? 'Edit' : 'View'}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return <>{data.loading ? <Loading /> : blogs()}</>;
};

export default Showposted;
