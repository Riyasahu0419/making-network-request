import { useState, useEffect } from "react";
import "./App.css";
import Datadisplay from "./components/Datadisplay";


function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  const api = "https://jsonplaceholder.typicode.com/posts";

  async function fetchData() {
    setIsLoading(true);
    try {
      let res = await fetch(api);
      let data = await res.json();
      setData(data);
    } catch (error) {
      setErr(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  function handleClick() {
    fetchData();
  }
 
  if (isLoading) return <h1>Loading...</h1>;

  if (err) return <h1>{err}</h1>;

  return (
    <>
      <button onClick={handleClick}>Fetch Data</button>
      {!isLoading &&
        !err &&
        data.map((post) => (
          <Datadisplay id={post.id} title={post.title} body={post.body} />
        ))}
    </>
  );
}

export default App;
