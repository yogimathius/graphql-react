import "./App.css";
import { useQuery } from "@apollo/client";
import { getPosts } from "../graphql/queries/getPosts.js";

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (process.env.NODE_ENV !== "production") {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

function App() {
  const { loading, error, data } = useQuery(getPosts);

  console.log(data);
  return <div className="App"></div>;
}

export default App;
