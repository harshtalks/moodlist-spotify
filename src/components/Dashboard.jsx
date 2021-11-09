import React, { useState } from "react";
import {
  Container,
  LeftContainer,
  UserProfile,
  UserList,
} from "../styles/dashboard.styles";
import useData from "../context/useData";
import html2canvas from "html2canvas";
import Loader from "./Loader";
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
const Dashboard = ({ user, spotify }) => {
  const [startLoading, setStartLoading] = useState(false);
  const [time, setTime] = useState(null);
  const { loading, data } = useData(time, spotify);

  const returnTime = () => {
    if (!time) return null;
    else if (time === "short_term") return "weekly";
    else if (time === "medium_term") return "monthly";
    else if (time === "long_term") return "half yearly";
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
          <img src={user.images[0].url} alt={`${user.display_name}`} />
          <h2>{user.display_name}</h2>
          <h4>{user.id}</h4>
          <h3 className="email">{user.email}</h3>
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
            className="download"
            onClick={(e) => {
              e.preventDefault();
              html2canvas(document.getElementById("my-node")).then(function (
                canvas
              ) {
                var link = document.createElement("a");
                document.body.appendChild(link);
                link.download = "html_image.png";
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
      {startLoading && loading ? (
        <Loader />
      ) : (
        data.items && (
          <UserList id="my-node">
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
          </UserList>
        )
      )}
    </Container>
  );
};

export default Dashboard;
