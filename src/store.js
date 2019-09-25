import  { createStore } from 'redux';
import reducer from './reducers';
import { obtenerStateStorage, guardarStateStorage } from './localstorage';

//gadthering citas from the localstorage
const storageState = obtenerStateStorage();

// reducer: it's where the functions that modifies the state will be dclared
const store = createStore(
    reducer,     
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//detects when the storage changes 
store.subscribe(() => {
    console.log('algo cambio');
    //this retrieves the hole state: store.getState()
    guardarStateStorage({citas: store.getState().citas});
})

//this 2 funcitons are used by the redux developer tool
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store;