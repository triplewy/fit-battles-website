import {
  getBattleAction, getBattleSuccessAction, getBattleFailureAction,
  addVoteAction,
  submitVotesAction, submitVotesSuccessAction, submitVotesFailureAction
} from './Vote.actions'
import { fetchBattle, fetchVote } from '../API/API'
import Cookies from 'js-cookie'

export function getBattles() {
  return (dispatch) => {
    dispatch(getBattleAction())
    fetchBattle()
    .then(res => res.json())
    .then(data => {
      dispatch(getBattleSuccessAction(data))
    })
    .catch(err => {
      dispatch(getBattleFailureAction(err))
    })
  }
}

export function addVote(vote) {
  return (dispatch) => {
    dispatch(addVoteAction(vote))
  }
}

export function submitVotes(votes) {
  return (dispatch) => {
    dispatch(submitVotesAction())
    fetchVote({ votes: votes })
    .then(res => res.json())
    .then(data => {
      if (data.message === 'success') {
        dispatch(submitVotesSuccessAction())
        Cookies.set('submitted', Date.now())
      } else {
        dispatch(submitVotesFailureAction(data.message))
      }
    })
    .catch(err => {
      dispatch(submitVotesFailureAction(err))
    })
  }
}
