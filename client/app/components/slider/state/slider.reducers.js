import CONSTANTS from './slider.constants';
import { generatedImages } from '../slider.mock';

const defaultState = {
  imageId: 0,
};

const decrement = (state) => {
  const lastImg = generatedImages.length - 1;
  let newState;

  if (state.imageId === 0) {
    newState = {
      ...state,
      imageId: lastImg,
    };
  }

  if (state.imageId !== 0) {
    newState = {
      ...state,
      imageId: state.imageId - 1,
    };
  }

  return newState;
};

const increment = (state) => {
  const lastImg = generatedImages.length - 1;
  let newState;

  if (state.imageId !== lastImg) {
    newState = {
      ...state,
      imageId: state.imageId + 1,
    };
  }

  if (state.imageId === lastImg) {
    newState = {
      ...state,
      imageId: 0,
    };
  }

  return newState;
};

const sliderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.DECREMENT: return decrement(state);
    case CONSTANTS.INCREMENT: return increment(state);
    default: return state;
  }
};

export default sliderReducer;
