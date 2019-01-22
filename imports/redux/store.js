import {combineReducers, createStore} from 'redux'
import cardsReducer from './cards/cardsReducers'
import initialState from './cards/cardsReducers.js'
import {playingReducer} from './playing'
import {
    initialise,
    move3Cards,
    setCards,
} from './cards/cardsActions'

const store = createStore(combineReducers({
    cards: cardsReducer,
    playing: playingReducer,

}))

export default store








