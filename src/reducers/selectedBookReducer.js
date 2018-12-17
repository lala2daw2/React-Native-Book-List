import {DESELECT_BOOK,SELECT_BOOK} from '../actions';

export default (state= {},action)=> {
  switch (action.type) {
    case SELECT_BOOK:
        return action.payload
    break;
    case DESELECT_BOOK:
        return {}
    break;
    default:
    return state;
  }
}
