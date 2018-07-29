import { SET_PANEL_DATA, CALL_SOME_TEST_METHOD } from './constants';

export default function runtime(state = {}, action) {
  switch (action.type) {
    case SET_PANEL_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case CALL_SOME_TEST_METHOD:
      return {
        ...state,
        ...{ someTestMethodResult: action.payload },
      };
    default:
      return state;
  }
}
