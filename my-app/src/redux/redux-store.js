import { createStore, combineReducers } from "redux";
import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';
import navReducer from './nav-reducer';

let reducers = combineReducers({
    profilePosts: profileReducer,
    dialog: dialogReducer,
    nav: navReducer
});

let store = createStore(reducers);

export default store;
