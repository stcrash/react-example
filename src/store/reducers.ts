import customReducer, { CustomState } from 'store/customState/reducer';

export interface State {
  customReducer: CustomState;
}

const reducers = {
  customReducer,
  // ...other reducers
};

export default reducers;
