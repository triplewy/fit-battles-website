export const GET_LEADERBOARD = 'GET_LEADERBOARD'
export const GET_LEADERBOARD_SUCCESS = 'GET_LEADERBOARD_SUCCESS'
export const GET_LEADERBOARD_FAILURE = 'GET_LEADERBOARD_FAILURE'

export function getLeaderboardAction() {
  return {
    type: GET_LEADERBOARD
  }
}

export function getLeaderboardSuccessAction(data) {
  return {
    type: GET_LEADERBOARD_SUCCESS,
    data: data
  }
}

export function getLeaderboardFailureAction(error) {
  return {
    type: GET_LEADERBOARD_FAILURE,
    error: error
  }
}
