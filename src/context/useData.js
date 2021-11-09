import { useState, useEffect } from "react";
const useData = (time_limit, spotifyWebApi) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (time_limit) {
      spotifyWebApi
        .getMyTopTracks({
          limit: 15,
          time_range: time_limit,
        })
        .then((res) => {
          setData(res);
          setLoading(false);
          console.log(res);
        })
        .catch((err) => {
          setError(err);
        });
    }
  }, [time_limit]);

  return { loading, data, error };
};
export default useData;
