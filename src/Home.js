import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./usefetch";

const Home = () => {
  const [name, setName] = useState("mario");
  const {
    data: blogs,
    isPending,
    errors,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
      {errors && (
        <div>
          <h1>{errors.message}</h1>
          <p>
            {errors.status}:{errors.statusText}
          </p>
        </div>
      )}
      <button onClick={() => setName("luigi")}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
