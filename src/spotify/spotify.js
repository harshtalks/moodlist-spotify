const client_id = process.env.REACT_APP_CLIENT_ID;
const redirect_uri = "https://moodlist.netlify.app/";
const base_uri = "https://accounts.spotify.com/authorize";
const scopes = ["user-top-read", "user-read-email", "user-read-private"];
const joiner = "%20";

export const URL = `${base_uri}?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes.join(
  joiner
)}&show_dialog=true`;

export const FetchTokenCode = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};
