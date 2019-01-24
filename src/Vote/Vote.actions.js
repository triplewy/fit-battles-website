export const GET_BATTLE = 'GET_BATTLE'
export const GET_BATTLE_SUCCESS = 'GET_BATTLE_SUCCESS'
export const GET_BATTLE_FAILURE = 'GET_BATTLE_FAILURE'

export const ADD_VOTE = 'ADD_VOTE'

export const SUBMIT_VOTES = 'SUBMIT_VOTES'
export const SUBMIT_VOTES_SUCCESS = 'SUBMIT_VOTES_SUCCESS'
export const SUBMIT_VOTES_FAILURE = 'SUBMIT_VOTES_FAILURE'

export function getBattleAction() {
  return {
    type: GET_BATTLE
  }
}

export function getBattleSuccessAction(data) {
  return {
    type: GET_BATTLE_SUCCESS,
    data: data
  }
}

export function getBattleFailureAction(error) {
  return {
    type: GET_BATTLE_FAILURE,
    error: error
  }
}

export function addVoteAction(vote) {
  return {
    type: ADD_VOTE,
    vote: vote
  }
}

export function submitVotesAction() {
  return {
    type: SUBMIT_VOTES
  }
}

export function submitVotesSuccessAction() {
  return {
    type: SUBMIT_VOTES_SUCCESS
  }
}

export function submitVotesFailureAction(error) {
  return {
    type: SUBMIT_VOTES_FAILURE,
    error: error
  }
}
