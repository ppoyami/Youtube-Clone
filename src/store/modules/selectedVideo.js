const initialState = {
  video: null,
};

const SET_VIDEO = 'selectedVideo/set';

function selectedVideo(state = initialState, aciton) {
  switch (aciton.type) {
    case SET_VIDEO:
      return {
        id: aciton.id,
        snippet: aciton.payload,
      };
    default:
      return state;
  }
}

export const selectVideo = (id, payload) => ({ type: SET_VIDEO, payload, id });

export default selectedVideo;
