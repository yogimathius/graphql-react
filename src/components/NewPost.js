import React, { useState } from "react";
import "./NewPost.scss"; // Import the SCSS file
import { gql, useMutation } from "@apollo/client";

const ADD_POST = gql`
  mutation Mutation($title: String, $content: String, $userId: ID) {
    addPost(title: $title, content: $content, userId: $userId) {
      title
      content
      postedBy {
        name
      }
    }
  }
`;

const GET_POSTS = gql`
  query Posts {
    posts {
      title
      content
      postedBy {
        name
      }
    }
  }
`;

const NewPostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [addPost, { loading, error, data }] = useMutation(ADD_POST, {
    refetchQueries: [GET_POSTS],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      content,
      userId: "1",
    };

    addPost({ variables: newPost });
    setTitle("");
    setContent("");
  };

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

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
