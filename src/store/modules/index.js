import { combineReducers } from 'redux';

import video from './video';
import selectedVideo from './selectedVideo';

const rootReducer = combineReducers({ video, selectedVideo });

export default rootReducer;
