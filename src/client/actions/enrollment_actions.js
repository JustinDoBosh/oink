import * as types from '../constants/enrollment_constants'

export function setPhrase(phrase) {
  return {
    type: types.SET_PHRASE,
    phrase
  }
}