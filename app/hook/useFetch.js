import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);

    axios.get('http://192.168.100.108:80/kb/api/fetch.php', {
      params: { cat: 'computer' }

    })
      .then(function (response) {
        setData(response.data.data)
        console.log(response.data.data);
      })
      .catch(function (error) {
        setError(error)

      })
      .then(function () {
        setLoading(false)

      });

  }
  useEffect(() => {
    fetchData();
  }, []);
  const refetch = () => {
    setLoading(true);
    fetchData();
  }
  return { data, isLoading, error, refetch }
}
export default useFetch;