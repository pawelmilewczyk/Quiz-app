import * as actionTypes from "./actionTypes";

export const updateTitles = (updatedTitles) => {
  return {
    type: actionTypes.UPDATE_TITLES,
    titles: updatedTitles,
  };
};
