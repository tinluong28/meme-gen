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

export const newMeme = meme => {
  return {
    type: NEW_MEME,
    meme
  };
};
