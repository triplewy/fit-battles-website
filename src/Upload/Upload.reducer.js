import { UPLOAD, UPLOAD_SUCCESS, UPLOAD_FAILURE } from './Upload.actions'

const initialState = {
  loading: false,
  success: false,
  error: ''
}

export default function upload(state = initialState, action) {
  switch (action.type) {
    case UPLOAD:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case UPLOAD_SUCCESS:
      return {
        loading: false,
        success: true,
        error: ''
      }
    case UPLOAD_FAILURE:
      return {
        loading: false,
        success: false,
        error: action.error
      }
    default:
      return state
  }
}
