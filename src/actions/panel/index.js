/* eslint-disable import/prefer-default-export */

import { SET_PANEL_DATA, CALL_SOME_TEST_METHOD } from './constants';

export function setPanelData(inputObj) {
  return {
    type: SET_PANEL_DATA,
    payload: inputObj,
  };
}

export const callSomeTestMethod = () => async (dispatch, getState, {api}) => {
  try {
    const result = await api('someTestMethod', {name: 'Test Body Content'});
    dispatch({type: CALL_SOME_TEST_METHOD, payload: result});
  } catch(error) {
    console.error('CallSomeTestMethod error: ', error);
  }

};

