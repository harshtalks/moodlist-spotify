import { useState, useEffect } from "react";
const useData = (time_limit, spotifyWebApi) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(false);
  const [artists, setArtists] = useState([]);
  const [genres, setGenres] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    setLoading(true);
    if (time_limit) {
      spotifyWebApi
        .getMyTopArtists({
          limit: 10,
          time_range: "short_term",
        })
        .then((data) => {
          setArtists([
            ...new Set(
              [].concat.apply(
                [],
                data.items.map((el) => el.id)
              )
            ),
          ]);
          const items = data.items.map((el) => {
            return el.genres;
          });
          setGenres([...new Set([].concat.apply([], items))]);
        })
        .then(() => {
          return spotifyWebApi.getMyTopTracks({
            limit: 15,
            time_range: time_limit,
          });
        })
        .then((res) => {
          setData(res);
          setTracks(res.items.map((el) => el.id));
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
        })
        .then(() => {
          return spotifyWebApi.getRecommendations({
            seed_artists: artists.sort((a, b) => 0.5 - Math.random())[0],
            seed_tracks: tracks.sort((a, b) => 0.5 - Math.random())[0],
            seed_genres: genres
              .sort((a, b) => 0.5 - Math.random())
              .splice(0, 3),
            limit: 15,
          });
        })
        .then((data) => {
          setSongs(data);
        })
        .catch((err) => console.error(err));
    }
  }, [time_limit]);

  return { loading, data, error, tracks, artists, genres, songs };
};
export default useData;
