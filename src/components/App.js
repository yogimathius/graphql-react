import "./App.css";
import NewPostForm from "./NewPost";

import PostList from "./PostList";

function App() {
  return (
    <div className="App">
      <h1>Social Network Feed with GraphQL</h1>
      <NewPostForm />
      <PostList />
    </div>
  );
}

export default App;
