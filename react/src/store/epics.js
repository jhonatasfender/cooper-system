import { combineEpics } from 'redux-observable';
import { values } from 'lodash';

import * as clientsEpics from './client/epics';

export default combineEpics(
  ...values(clientsEpics)
);
