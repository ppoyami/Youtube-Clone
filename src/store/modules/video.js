import { youtube } from '../../service';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const LOADING = 'video/loading';
const SUCCESS = 'video/success';
const ERROR = 'video/error';

function video(state = initialState, aciton) {
  switch (aciton.type) {
    case LOADING:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case SUCCESS:
      return {
        loading: false,
        data: aciton.payload,
        error: null,
      };
    case ERROR:
      return {
        loading: false,
        data: null,
        error: aciton.error,
      };
    default:
      return state;
  }
}

export default video;

// thunk 함수 작성
/*
 (params) => (dispatch, state) => {..logic}
 */

export const getPopularVideo = async (dispatch, _) => {
  dispatch({ type: LOADING });
  try {
    const payload = await youtube.mostPopular();
    dispatch({ type: SUCCESS, payload });
  } catch (e) {
    dispatch({ type: ERROR, error: e.message });
  }
};

export const searchVideo = query => async (dispatch, _) => {
  dispatch({ type: LOADING });
  try {
    const payload = await youtube.search(query);
    dispatch({ type: SUCCESS, payload });
  } catch (e) {
    dispatch({ type: ERROR, error: e.message });
  }
};
