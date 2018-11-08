import { actionTypes } from '../actions';
import successReducer from './successReducer';

test("returns default initial state to `false` when no action is passed", () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
});

test('retuns state of true upon receiving action of type `CORRECT_GUESS`', () => {
    const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
    expect(newState).toBe(true);
});