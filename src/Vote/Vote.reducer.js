import {
  GET_BATTLE, GET_BATTLE_SUCCESS, GET_BATTLE_FAILURE,
  ADD_VOTE,
  SUBMIT_VOTES, SUBMIT_VOTES_SUCCESS, SUBMIT_VOTES_FAILURE
} from './Vote.actions'

const initialState = {
  loading: true,
  error: '',
  battles: [],
  currentBattle: 0,
  votes: [],
  submitLoading: false,
  submitError: '',
  submitted: false
}

export default function vote(state = initialState, action) {
  switch (action.type) {
    case GET_BATTLE:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case GET_BATTLE_SUCCESS:
      return {
        ...state,
        loading: false,
        battles: action.data,
        error: ''
      }
    case GET_BATTLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case ADD_VOTE:
      return {
        ...state,
        votes: [...state.votes, action.vote],
        currentBattle: state.currentBattle + 1
      }
    case SUBMIT_VOTES:
      return {
        ...state,
        submitLoading: true,
        submitError: ''
      }
    case SUBMIT_VOTES_SUCCESS:
      return {
        ...state,
        submitLoading: false,
        submitted: true,
        submitError: ''
      }
    case SUBMIT_VOTES_FAILURE:
      return {
        ...state,
        submitLoading: false,
        submitError: action.error
      }
    default:
      return state
  }
}
