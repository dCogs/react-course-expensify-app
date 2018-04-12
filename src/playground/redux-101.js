import { createStore } from 'redux';

// Action generators are preferred
const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({ count = 0} = {}) => ({
    type: 'SET',
    count
})

const countReducer = (state={ count: 0 }, action ) => {
    switch (action.type) {
        case 'INCREMENT': 
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT': 
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET': 
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default: return state;
    }
}

const store = createStore(countReducer);

console.log('redux-101');
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy:9 }));
store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount({ decrementBy: 2}));
store.dispatch(setCount());

// can destructure paramaters
const add = ({ a, b }) => {
    return a + b
};
console.log(add(({a: 12, b: 2 })));