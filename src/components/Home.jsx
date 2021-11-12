import React from "react";
import {
  Container,
  LeftContainer,
  RightContainer,
  SubHead,
  Button,
  Headline,
  Image,
} from "../styles/home.styles";
import SpotifyWhite from "../images/spotify_w.png";
import SpotifyBlack from "../images/spotify_b.png";
import { ReactComponent as Spotify } from "../svg/spotify.svg";
import { URL } from "../spotify/spotify";

const Home = ({ theme }) => {
  const loginAction = () => {
    window.location = URL;
  };

  return (
    <Container id="main">
      <LeftContainer>
        <Headline>
          Moodlist <span>Spotify</span>
        </Headline>
        <SubHead>
          Get your spotify top recommends <br />
          in a beautiful grocery list.
        </SubHead>
        <Button onClick={loginAction}>
          <p>Login with Spotify</p>
          {theme === "light" ? (
            <img src={SpotifyWhite} alt="spotify-small" />
          ) : (
            <img src={SpotifyBlack} alt="spotify-small" />
          )}
        </Button>
      </LeftContainer>
      <RightContainer>
        <Image>
          <Spotify />
        </Image>
      </RightContainer>
    </Container>
  );
};

export default Home;
