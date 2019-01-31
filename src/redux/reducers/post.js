import { handleActions, createAction } from 'redux-actions';
// import { Map, List } from 'immutable';
// import loadData from '../../lib/loadData';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

export const getPost = createAction(GET_POST);
export const getPostSuccess = createAction(GET_POST_SUCCESS);
export const getPostError = createAction(GET_POST_ERROR);

/*
export const getPost = path => ({
  type: GET_POST,
  payload: loadData(path),
});
*/

/*
export const getPost = createAction(
  GET_POST,
  async path => await loadData(path)
);
*/

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export default handleActions(
  {
    [GET_POST]: () => {
      return {
        loading: true,
        error: false,
        data: [],
      };
      // return state.set('loading', true).set('error', false);
    },

    [GET_POST_SUCCESS]: (_, action) => {
      let { data } = action.payload;

      if (!Array.isArray(data)) {
        data = [data];
      }

      return {
        loading: false,
        error: false,
        data,
      };
    },
    [GET_POST_ERROR]: () => {
      return {
        loading: false,
        error: true,
        data: [],
      };
      // return state.set('loading', false).set('error', true);
    },
  },
  initialState
);
