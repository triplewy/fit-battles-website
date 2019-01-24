import { uploadAction, uploadSuccessAction, uploadFailureAction } from './Upload.actions'
import { fetchUpload } from '../API/API'

export function upload(username, imageUrl) {
  return (dispatch) => {
    dispatch(uploadAction())
    fetchUpload({ username: username, imageUrl: imageUrl })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      dispatch(uploadSuccessAction())
    })
    .catch(err => {
      dispatch(uploadFailureAction(err))
    })
  }
}
