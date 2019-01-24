import { handleActions, createAction } from 'redux-actions';
// import { Map, List } from 'immutable';
import loadData from '../../lib/loadData';

const GET_POST = 'GET_POST';
const GET_POST_PENDING = 'GET_POST_LOADING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_ERROR';
/*
export const getPost = path => ({
  type: GET_POST,
  payload: loadData(path),
});
*/

export const getPost = createAction(
  GET_POST,
  async path => await loadData(path)
);

/*
const initialState = Map({
  pending: false,
  error: false,
  data: List([
    Map({
      title: '',
      body: '',
    }),
  ]),
});
 */

const initialState = {
  pending: false,
  error: false,
  data: [],
};

export default handleActions(
  {
    [GET_POST_PENDING]: () => {
      return {
        pending: true,
        error: false,
        data: [],
      };
      // return state.set('pending', true).set('error', false);
    },

    [GET_POST_SUCCESS]: (_, action) => {
      let data = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

      return {
        pending: false,
        error: false,
        data,
      };

      /*
      return state
        .set('pending', false)
        .set('error', false)
        .set(
          'data',
          List([
            ...data.map(item =>
              Map({
                title: item.title,
                body: item.body,
              })
            ),
          ])
        );
      */
    },
    [GET_POST_FAILURE]: () => {
      return {
        pending: false,
        error: true,
        data: [],
      };
      // return state.set('pending', false).set('error', true);
    },
  },
  initialState
);
