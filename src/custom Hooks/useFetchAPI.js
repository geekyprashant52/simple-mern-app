import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchAPI(url) {
  const [apiResults, setapiResults] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const fetchAPI = () => {
    axios
      .get(url)
      .then((res) => {
        console.log("Response from Api: " + res);
        setapiResults(res.data);
        setisLoading(false);
      })
      .catch((err) => console.log("error occured!" + err));
  };

  useEffect(() => {
    fetchAPI();
  }, [url]);

  return { apiResults, isLoading };
}
