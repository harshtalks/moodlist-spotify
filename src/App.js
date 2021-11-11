import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FetchTokenCode } from "./spotify/spotify";
import SpotifyWebApi from "spotify-web-api-js";

//importing theme
import { GlobalStyles } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./themes/theme";
import { useThemeContext } from "./context/useThemeContext";

//importing components
import Home from "./components/Home";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";

const spotifyWebApi = new SpotifyWebApi();

function App() {
  const [theme] = useThemeContext();
  const [getToken, setGetToken] = useState("");
  const [user, getUser] = useState({});

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const hash = FetchTokenCode();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setGetToken(_token);
      spotifyWebApi.setAccessToken(_token);

      spotifyWebApi
        .getMe()
        .then((user) => {
          getUser(user);
          console.log(user);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Moodlist</title>
        <meta
          property="description"
          content="Get your spotify top items in a beautiful grocery list."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap"
          rel="stylesheet"
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme === "dark" ? DarkTheme : LightTheme}>
        <GlobalStyles />
        <Nav />

        {user.email ? (
          <Dashboard user={user} spotify={spotifyWebApi} token={getToken} />
        ) : (
          <Home theme={theme} />
        )}
      </ThemeProvider>
      {console.log(process.env)}
    </>
  );
}

export default App;
