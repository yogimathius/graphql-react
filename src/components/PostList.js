import React from "react";
import Post from "./Post.js";
import "./PostList.scss"; // Import the SCSS file
import { useQuery, gql } from "@apollo/client";

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

const PostList = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  const renderedPosts =
    !loading && data
      ? data.posts.map((post) => {
          return <Post {...post} />;
        })
      : null;

  return <div className="post-list">{renderedPosts}</div>;
};

export default PostList;
