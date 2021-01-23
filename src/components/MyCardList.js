import React, { useContext } from 'react'
import styled from 'styled-components'

import PokeCard from './PokeCard'
import { DexContext } from '../stores/DexProvider'

function CardList() {

    const { dex: { myCards } } = useContext(DexContext)

    return (
        <CardsContainer>
            {
                myCards.map((card, index) => <PokeCard isMyCard={true} key={`cards-${index}`} card={card}/>)
            }
        </CardsContainer>
    )
}

const CardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
    max-height: 620px;
    overflow-y:scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`

export default CardList