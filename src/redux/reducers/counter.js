import { handleActions, createAction } from 'redux-actions';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

export const incrementAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(increment());
  }, 1000);
};

export const decrementAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(decrement());
  }, 1000);
};

const initialState = {
  count: 1
};

export default handleActions(
  {
    [INCREMENT]: state => ({ count: state.count + 1}),
    [DECREMENT]: state => ({ count: state.count - 1}),
  },
  initialState
);
