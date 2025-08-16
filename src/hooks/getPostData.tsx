import React, { useState, useEffect } from "react";
import axios from "axios";

export function getInitData(id: number) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/" + id
        );
        setData(response.data);
        setError("");
      } catch (error) {
        setData(null);
        setError((error as Error).message);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    }
    fetchData();
  }, []);

  return { isLoading, data, error };
}
