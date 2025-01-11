import React, { useState, useEffect } from 'react';
import { getBlogsList } from '../../utils/apiCalls/blogs';
import BlogCard from './components/BlogCard/BlogCard';
import BlogCardShimmer from './components/BlogCardShimmer/BlogCardShimmer';

import styles from './Blogs.module.css';

const Blogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogsList, setBlogsList] = useState([]);
  useEffect(() => {
    setLoading(true);
    getBlogsList()
      .then(response => {
        console.log('Blogs list is: ', response);
        if (response && response.length > 0) {
          setBlogsList(response);
        }
      })
      .catch(error => {
        console.log('Error in fetching blogs list: ', error);
      })
      .finally(() => {
        setLoading(false);
      }, []);
  }, []);

  // setInterval(() => {
  //   setLoading(!loading);
  // }, 3000);

  return (
    <div className={styles.pageContainer}>
      {loading && <BlogCardShimmer count={5} />}

      {!loading &&
        blogsList.map(blog => (
          <BlogCard
            key={blog.id}
            categories={blog.category}
            link={blog.link}
            title={blog.title}
            imageSrc={blog.imageSrc}
          />
        ))}
    </div>
  );
};

export default Blogs;
