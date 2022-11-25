import React, { useState, useEffect, useCallback, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  const [laptops, setLaptops] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLaptopHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const loadedLaptops = [];
      for (const key in data) {
        loadedLaptops.push({
          id: key,
          title: data[key].title,
          price: data[key].price,
          description: data[key].description,
        });
      }
      setLaptops(loadedLaptops);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchLaptopHandler();
  }, [fetchLaptopHandler]);

  let content = <p>Found no movies.</p>;

  if (laptops.length > 0) {
    content = <Home laptops={laptops} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home laptops={laptops} />}
        <></>
      </main>
    </React.Fragment>
  );
}

export default App;
