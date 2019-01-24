import { GET_LEADERBOARD, GET_LEADERBOARD_SUCCESS, GET_LEADERBOARD_FAILURE } from './Leaderboard.actions'

const initialState = {
  loading: true,
  error: '',
  battles: [],
}

export default function leaderboard(state = initialState, action) {
  switch (action.type) {
    case GET_LEADERBOARD:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case GET_LEADERBOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        battles: action.data,
        error: ''
      }
    case GET_LEADERBOARD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}
