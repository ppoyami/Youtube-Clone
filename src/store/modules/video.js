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
