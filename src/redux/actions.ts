import { INCREMENT, DECREMENT } from "./actionTypes";

export interface IncrementAction {
  type: typeof INCREMENT;
}

export interface DecrementAction {
  type: typeof DECREMENT;
}

export type CounterActions = IncrementAction | DecrementAction;

export const increment = (): IncrementAction => ({ type: INCREMENT });

export const decrement = (): DecrementAction => ({ type: DECREMENT });
