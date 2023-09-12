import React from "react";
import Post from "./Post.js";
import "./PostList.scss"; // Import the SCSS file

const data = {
  posts: [
    {
      title: "Offering tech help for coding questions 🖥️",
      content:
        "If you're stuck on a coding problem, I'm here to help! #CodingHelp",
      postedBy: {
        name: "Helpful Hannah",
        email: "hannah@example.com",
        __typename: "User",
      },
      __typename: "Post",
    },
    {
      title: "Looking for gardening advice 🌱",
      content: "I'm a newbie gardener and could use some tips. #Gardening",
      postedBy: {
        name: "Helpful Hannah",
        email: "hannah@example.com",
        __typename: "User",
      },
      __typename: "Post",
    },
    {
      title: "Offering car repair expertise 🚗",
      content: "Experienced mechanic ready to assist! #CarRepair",
      postedBy: {
        name: "Resourceful Rob",
        email: "rob@example.com",
        __typename: "User",
      },
      __typename: "Post",
    },
  ],
};

const PostList = () => {
  const renderedPosts = data.posts.map((post) => {
    return <Post {...post} />;
  });
  return <div className="post-list">{renderedPosts}</div>;
};

export default PostList;
