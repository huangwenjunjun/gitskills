
import {combineReducers} from 'redux'
import counter from './reducers/counter';
import userInfo from './reducers/userInfo';
console.log(2);
export default combineReducers({
    counter,
    userInfo
})


// import counter from './reducers/counter';
// import userInfo from './reducers/userInfo';
// console.log(2);
// export default function combineReducers(state = {}, action) {
//     return {
//         counter: counter(state.counter, action),
//         userInfo: userInfo(state.userInfo, action)
//     }
// }