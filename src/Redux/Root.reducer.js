import { combineReducers } from 'redux';
import upload from '../Upload/Upload.reducer'
import vote from '../Vote/Vote.reducer'
import leaderboard from '../Leaderboard/Leaderboard.reducer'

export default combineReducers({
  upload,
  vote,
  leaderboard
});
