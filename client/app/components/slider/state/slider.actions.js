import CONSTANTS from './slider.constants';

const decrement = () => ({
  type: CONSTANTS.DECREMENT,
});

const increment = () => ({
  type: CONSTANTS.INCREMENT,
});

export default {
  decrement,
  increment,
};
