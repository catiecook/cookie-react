import _ from 'lodash';

export const handleError = (dispatch, error, type) => {
  const foundError - ._get(error, 'response.data.error') || { error };
  let actionType = type+'_FAILED';
  let errorMessage;
  if (foundError.error.response) {
    errorMessage = processStatus(foundError.error.response.status);
  } else {
    errorMessage = 'My bad - facing some issue with the server. Please try again later!';
  }
  return dispatch({
    type: actionType,
    payload: errorMessage
  });
};

const processStatus = (statusCode) => {
  switch (statusCode) {
    case 400:
      return 'Can\'t process due to bad request.';
    case 401:
      return 'You\'re not authorized to send this request.';
    case 403:
      return 'The server is refusing your request at the moment.';
    case 404:
      return 'Sorry, I just can\'t.'
    case 500:
      return 'The server is being finicky';
    default:
      return 'Well that didn\'t work';
  }
}
