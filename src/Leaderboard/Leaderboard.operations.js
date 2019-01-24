import { getLeaderboardAction, getLeaderboardSuccessAction, getLeaderboardFailureAction } from './Leaderboard.actions'
import { fetchLeaderboard } from '../API/API'

export function getLeaderboard() {
  return (dispatch) => {
    dispatch(getLeaderboardAction())
    fetchLeaderboard()
    .then(res => res.json())
    .then(data => {
      console.log(data);
      dispatch(getLeaderboardSuccessAction(data))
    })
    .catch(err => {
      dispatch(getLeaderboardFailureAction(err))
    })
  }
}
