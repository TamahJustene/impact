import React from 'react';
import './RecentBlogPosts.css';
import blogPosts1 from "./assets/blog-1.jpg"
import blogPosts2 from "./assets/blog-2.jpg"
import blogPosts3 from "./assets/blog-3.jpg"
import blogpostauthor1  from "./assets/blog-author.jpg"
import blogpostauthor2  from "./assets/blog-author-2.jpg"
import blogpostauthor3  from "./assets/blog-author-3.jpg"

const RecentBlogPosts = () => {
  const blogPosts = [
    {
      id: 1,
      image: blogPosts1,
      title: 'Blog Post 1',
      about: 'Short description of Blog Post 1',
      author: 'John Doe',
      authorImage: blogpostauthor1,
      date: 'June 1, 2023',
    },
    {
      id: 2,
      image: blogPosts2,
      title: 'Blog Post 2',
      about: 'Short description of Blog Post 2',
      author: 'Jane Smith',
      authorImage: blogpostauthor2,
      date: 'June 5, 2023',
    },
    {
      id: 3,
      image: blogPosts3,
      title: 'Blog Post 3',
      about: 'Short description of Blog Post 3',
      author: 'Mark Johnson',
      authorImage: blogpostauthor3,
      date: 'June 10, 2023',
    },
  ];

  return (
    <div className="recent-blog-posts-section">
      <h2 className="section-title">Recent Blog Posts</h2>
      <hr className="section-hr" />
      <p className="section-text">Short paragraph text goes here.</p>
      <div className="blog-posts-container">
        {blogPosts.map((post) => (
          <div className="blog-post" key={post.id}>
            <div className="blog-post-image">
              <img src={post.image} alt="Blog Post" />
            </div>
            <h3 className="blog-post-title">{post.title}</h3>
            <p className="blog-post-about">{post.about}</p>
            <div className="author-info">
              <div className="author-image">
                <img src={post.authorImage} alt="Author" />
              </div>
              <div className="author-details">
                <p className="author-name">{post.author}</p>
                <p className="post-date">{post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogPosts;
