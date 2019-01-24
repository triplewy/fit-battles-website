const url = process.env.REACT_APP_API_URL

const getParams = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
}

function putParams(body) {
  return {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  }
}

function postParams(body) {
  return {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  }
}

// function postParamsFormdata(formdata) {
//   return {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'multipart/formdata',
//     },
//     credentials: 'include',
//     body: formdata
//   }
// }

export function fetchUpload(body) {
  return fetch(`${url}/upload`, postParams(body))
}
