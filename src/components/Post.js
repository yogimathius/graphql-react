import React from "react";
import "./Post.scss"; // Import the SCSS file

const Post = ({ title, content, postedBy }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <h3>{content}</h3>
      <h3>Posted by: {postedBy.name}</h3>
    </div>
  );
};

export default Post;
