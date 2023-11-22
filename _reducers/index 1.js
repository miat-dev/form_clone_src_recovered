import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { alert } from './alert.reducer';
import { form } from './form.reducer';
import { display } from './display.reducer';
const rootReducer = combineReducers({
    alert,
    registration,
    authentication,
    form,
    display
});

export default rootReducer;