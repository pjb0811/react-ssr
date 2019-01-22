import { handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import loadData from '../../lib/loadData';

const GET_POST = 'GET_POST';
const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

export const getPost = path => ({
  type: GET_POST,
  payload: loadData(path),
});

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

export default handleActions(
  {
    [GET_POST_PENDING]: state => {
      return state.set('pending', true).set('error', false);
    },

    [GET_POST_SUCCESS]: (state, action) => {
      let data = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

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
    },
    [GET_POST_FAILURE]: state => {
      return state.set('pending', false).set('error', true);
    },
  },
  initialState
);
