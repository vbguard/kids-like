import * as actions from './actions';
import reducers from './reducers';
import * as selectors from './selectors';
import operations from './operations';

export default {
  sessionActions: actions,
  sessionReducers: reducers,
  sessionSelectors: selectors,
  ...operations
};
