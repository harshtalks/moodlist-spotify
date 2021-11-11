import React, { useState } from "react";
import {
  Container,
  LeftContainer,
  UserProfile,
  UserList,
  RecommendList,
} from "../styles/dashboard.styles";
import Recom from "../svg/recom.png";
import useData from "../context/useData";
import html2canvas from "html2canvas";
import Loader from "./Loader";
import Girl from "../avatar/girl.png";
const timeLimit = [
  {
    id: 0,
    time: "short_term",
    name: "This Week",
    text: "weekly",
  },
  {
    id: 1,
    time: "medium_term",
    name: "This Month",
    text: "monthly",
  },
  {
    id: 2,
    time: "long_term",
    name: "Past Six Months",
    text: "half yearly",
  },
];
const Dashboard = ({ user, spotify, token }) => {
  const [select, setSelect] = useState(null);
  const [startLoading, setStartLoading] = useState(false);
  const [time, setTime] = useState(null);
  const { loading, data, songs } = useData(time, spotify);

  const returnTime = () => {
    if (!time) return null;
    else if (time === "short_term") return "Weekly";
    else if (time === "medium_term") return "Monthly";
    else if (time === "long_term") return "Half yearly";
  };

  const returnDate = () => {
    const date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDay();
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  return (
    <Container>
      <LeftContainer>
        <UserProfile id="lol">
          <img
            src={user.images[0] ? user.images[0].url : Girl}
            alt={`${user.display_name}`}
          />
          <h2>{user.display_name}</h2>
          <h4>@{user.id}</h4>
          <h3 className="email">{user.email}</h3>
          <div className="switch">
            <button
              className={select === "past" ? "activeClass" : null}
              onClick={(e) => {
                setSelect("past");
                setTime(null);
              }}
            >
              Most Played Tracks
            </button>
            <button
              className={select === "recommend" ? "activeClass" : null}
              onClick={(e) => {
                setSelect("recommend");
                setTime(null);
              }}
            >
              Get Recommendations
            </button>
          </div>
          <div className="buttons">
            {timeLimit.map((el) => {
              return (
                <button
                  className={time === el.time ? "active" : null}
                  onClick={() => {
                    setStartLoading(true);
                    setTime(el.time);
                  }}
                  key={el.id}
                >
                  {el.name}
                </button>
              );
            })}
          </div>
          <button
            disabled={time && startLoading && loading}
            className={`download ${
              time && startLoading && loading ? "disable" : null
            }`}
            onClick={(e) => {
              e.preventDefault();
              html2canvas(document.getElementById("my-node")).then(function (
                canvas
              ) {
                var link = document.createElement("a");
                document.body.appendChild(link);
                link.download = "list-grocery.png";
                link.href = canvas.toDataURL("image/png");
                link.target = "_blank";
                link.click();
              });
            }}
          >
            Download Image
          </button>
        </UserProfile>
      </LeftContainer>

      {select &&
        (select === "past" ? (
          time && startLoading && loading ? (
            <Loader />
          ) : (
            data.items && (
              <UserList id={select === "past" ? "my-node" : ""}>
                <h1>
                  {user.display_name}'s <br /> {returnTime()} Must Haves
                </h1>
                <div className="songs">
                  {data.items.map((el) => {
                    return (
                      <div key={el.id} className="each">
                        <p className="song">
                          {el.name} -{" "}
                          {el.artists.map((art) => (
                            <span key={art.id}>{art.name}</span>
                          ))}
                        </p>
                        <p>{el.popularity}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="date">{returnDate()}</div>
                <div className="name">moodlist.netlify.app</div>
                <div className="heading">Grocery List Essentials</div>
              </UserList>
            )
          )
        ) : time && loading && startLoading ? (
          <Loader />
        ) : (
          songs.tracks && (
            <RecommendList id={select === "recommend" ? "my-node" : ""}>
              <div className="content">
                <div className="title">
                  <h1>Grocery List for {user.display_name}</h1>
                </div>
                {songs.tracks.map((el) => (
                  <div className="song">
                    <h2>
                      {el.name} -{" "}
                      {el.artists.map((x) => (
                        <span className="artist">{x.name}</span>
                      ))}
                    </h2>
                    <span className="box"></span>
                  </div>
                ))}
                <div className="footer">
                  <div className="leftContainer">
                    <img src={Recom} alt="recom" />
                  </div>
                  <div className="rightContainer">
                    <div>
                      {" "}
                      <h2>{returnDate()}</h2>
                    </div>
                    <div>
                      <h2>moodlist.netfliy.app</h2>
                    </div>
                  </div>
                </div>
              </div>
            </RecommendList>
          )
        ))}
    </Container>
  );
};

export default Dashboard;
