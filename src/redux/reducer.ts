import { INCREMENT, DECREMENT } from "./actionTypes";
import { CounterActions } from "./actions";

// Define the state shape
export interface CounterState {
  count: number;
}

// Initial state
const initialState: CounterState = {
  count: 0,
};

// Reducer
const counterReducer = (
  state = initialState,
  action: CounterActions
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
