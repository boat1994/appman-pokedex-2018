import React, { createContext, useReducer} from 'react'

export const DexContext = createContext({})

const initialState = {
    myCards : []
}

const dexReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CARD': 
        return {
            ...state,
            myCards: [
                ...state.myCards,
                action.payload
            ],
        }
        case 'DELETE_CARD': 
        return {
            ...state,
            myCards: state.myCards.filter(card => card.id !== action.payload.id)
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