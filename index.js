const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'first redux action'
  }
}

function buyIcreCream() {
  return {
    type: BUY_ICECREAM
  }
}

const initialStateCake = {
  numOfCakes: 10
}

const initialStateIceCream = {
  numOfIceCreams: 20
}

const reducerCake = (state = initialStateCake, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}

const reducerIceCream = (state = initialStateIceCream, action) => {
  switch (action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }
    default: return state
  }
}

const rootReducer = combineReducers({
  cake: reducerCake,
  iceCream: reducerIceCream
})
const store = createStore(rootReducer)
console.log('Initial state', store.getState())
// store.subscribe(() => console.log('Update State', store.getState()))
const unsubscribe = store.subscribe(() => console.log('Update state', store.getState()))

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcreCream());
store.dispatch(buyIcreCream());

unsubscribe()