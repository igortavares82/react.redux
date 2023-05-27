import { act } from 'react-dom/test-utils'
import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    numbers: function(state, action) {

        switch(action.type) {
            case 'NUMBER_MIN_UPDATED':
                return { 
                    ...state,
                    min: action.payload
                }
            case 'NUMBER_MAX_UPDATED':
                return {
                    ...state,
                    max: action.payload
                }
            default:
                return {
                    min: 7,
                    max: 31
                }
        }
    },
    names: function(state, action) {

        console.log('names', state, ' ', action)
        return [
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig