import React, { createContext, useReducer} from 'react'

export const DexContext = createContext({})

const initialState = {
    cards : []
}

const dexReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CARD': 
        return {
            ...state,
            cards: [
                ...state.cards,
                action.payload
            ],
        }
        case 'DELETE_CARD': 
        return {
            ...state,
            cards: state.cards.filter(card => card !== action.payload)
        }
        default: return state
    }
}

export const DexProvider = ({ children }) => {
    const [dexState, dexDispatch] = useReducer(
        dexReducer,
        initialState
    )

    const dex = dexState

    const addCard = payload =>
        dexDispatch({
            type: "ADD_CARD",
            payload
        })

    const deleteCard = payload =>
        dexDispatch({
            type: "DELETE_CARD",
            payload
        })
    
    return (
        <DexContext.Provider value={{ dex, addCard, deleteCard }}>
            { children }
        </DexContext.Provider>
    )
}