import {REQUEST_POST, SHOW_LOADER, HIDE_LOADER} from './types';

export const requestPosts = (title) => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());

      const response = await fetch(
        `https://api.unsplash.com/search/collections?page=1&query=${title}&client_id=R1xlpqTiS1iTONGDtb-9bJcYyzIgbi4IqxitjmT1gjk`,
      );
      const jsonRespose = await response.json();
      //After fetching we'll get a big object with big count of data and the only solution
      //that i foun is to upload is to use photos collection link to upload photos
      const photos = await fetch(
        jsonRespose.results[0].links.photos +
          '?client_id=R1xlpqTiS1iTONGDtb-9bJcYyzIgbi4IqxitjmT1gjk',
      );

      const jsonPhotos = await photos.json();
      dispatch({type: REQUEST_POST, payload: jsonPhotos});
      dispatch(hideLoader());
    } catch (error) {
      console.log(error.message);
      dispatch(hideLoader());
    }
  };
};

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};
