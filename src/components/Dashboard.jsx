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
import BarCode from "../svg/barcode.png";
import Paper from "../images/paper-1.jpg";
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

  const sum = (data) => {
    const arraySum = data.items.map((el) => el.popularity);
    const total = arraySum.reduce((ac, current) => ac + current, 0);

    return total;
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
                <div className="top">
                  <h1>Cash Reciept</h1>
                  <p>{returnTime()}</p>
                  <h3>Moodlist.netlify.app</h3>
                </div>
                <div className="buyer">
                  <div className="detail">
                    <p>Name:</p>
                    {user.display_name && <p>{user.display_name}</p>}
                  </div>
                  <div className="detail">
                    <p>TEL:</p>
                    <p>0987 123 890 5678</p>
                  </div>
                  <div className="detail">
                    <p>Date:</p>
                    <p>{returnDate()}</p>
                  </div>
                  <div className="detail">
                    <p>Manager:</p>
                    {data.items[0] ? (
                      <p>{data.items[0].artists[0].name}</p>
                    ) : (
                      <p>Harsh Pareek</p>
                    )}
                  </div>
                </div>
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
                        <p>${el.popularity}.00</p>
                      </div>
                    );
                  })}
                </div>
                <div className="total">
                  <div className="detail">
                    <p>Price:</p>
                    <p>${sum(data)}.00</p>
                  </div>
                  <div className="detail">
                    <p>Sale:</p>
                    <p>00.00</p>
                  </div>
                  <div className="detail">
                    <p>VAT:</p>
                    <p>2.55</p>
                  </div>
                </div>
                <div className="finalSum">
                  <p>Total:</p>
                  <p>${sum(data) + 2.55}</p>
                </div>
                <div className="thanks">
                  <h1>Thank You!</h1>
                  <img src={BarCode} alt="barcode" />
                </div>
                <img class="paper" src={Paper} alt="paper" />
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
