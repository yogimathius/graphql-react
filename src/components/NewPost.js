import React, { useState } from "react";
import "./NewPost.scss"; // Import the SCSS file

const NewPostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      content,
    };

    setTitle("");
    setContent("");
  };

  return (
    <div className="new-post-form">
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="content">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="content">
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default NewPostForm;
