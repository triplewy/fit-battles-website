export const UPLOAD = 'UPLOAD'
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS'
export const UPLOAD_FAILURE = 'UPLOAD_FAILURE'

export function uploadAction() {
  return {
    type: UPLOAD
  }
}

export function uploadSuccessAction() {
  return {
    type: UPLOAD_SUCCESS
  }
}

export function uploadFailureAction(error) {
  return {
    type: UPLOAD_FAILURE,
    error: error
  }
}
