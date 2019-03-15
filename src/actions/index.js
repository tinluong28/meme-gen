export const RECEIVE_MEMES = "RECEIVE_MEMES";

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
