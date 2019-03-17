import { username, password } from "./secrets";

export const RECEIVE_MEMES = "RECEIVE_MEMES";
export const NEW_MEME = "NEW_MEME";

const receiveMeme = json => {
  const { memes } = json.data;
  return {
    type: RECEIVE_MEMES,
    memes
  };
};

const fetchMemesJson = () => {
  return fetch("https://api.imgflip.com/get_memes").then(response =>
    response.json()
  );
};

export const fetchMemes = () => dispatch => {
  fetchMemesJson().then(json => dispatch(receiveMeme(json)));
};

const newMeme = meme => {
  return {
    type: NEW_MEME,
    meme
  };
};

export const postMemeJson = params => {
  params["username"] = username;
  params["password"] = password;

  const bodyParams = Object.keys(params)
    .map(key => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
    })
    .join("&");

  console.log("bodyParams", bodyParams);
  return fetch("https://api.imgflip.com/caption_image", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: bodyParams
  }).then(response => response.json());
};

export const createMeme = new_meme_object => {
  return dispatch => {
    return postMemeJson(new_meme_object).then(new_meme =>
      dispatch(newMeme(new_meme))
    );
  };
};
