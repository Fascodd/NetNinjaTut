import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [isPending, setIsPending] = useState(true);
  const [errors, setErrors] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const response = await fetch(url);
      if (!response.ok) {
        setErrors({
          message: "The following errors have occured",
          status: response.status,
          statusText: response.statusText,
        });
      } else {
        const data = await response.json();
        setData([...data]);
      }
      setIsPending(false);
    }, 1000);
  }, [url]);

  return { data, isPending, errors };
};

export default useFetch;
