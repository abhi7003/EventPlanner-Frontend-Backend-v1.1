import { createStore } from 'redux';
import Validation from './reducers/Validation';



//save state to localstorage to persiste after refrshment
function saveToLocalStorage(state){
    try{
        const serializedState=JSON.stringify(state);
        localStorage.setItem("state",serializedState);
    }catch(e){
        console.log(e);
    }
    
}

//save back to state
function loadFromLocalStorage(){
    try{
        const serializedState=localStorage.getItem("state");
        return JSON.parse(serializedState);
    }catch(e){
        console.log(e);
        return undefined;
    }
}

const persistedState=loadFromLocalStorage();

//create a store along + extension + give persited object as key to reload
const store=createStore(Validation,persistedState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//store state in localstorage through method whenever state changes
store.subscribe(()=> saveToLocalStorage(store.getState()));
export default store;