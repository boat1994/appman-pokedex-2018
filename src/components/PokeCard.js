import React, { useContext } from 'react'
import styled from 'styled-components'
import PowerGauge from './PowerGauge'
import { cardCalculate } from '../utils/calculate'
import useHover from '../hooks/useHover'

import { DexContext } from '../stores/DexProvider'

function PokeCard({card, isMyCard}) {
 
    const [hoverRef, isHovered] = useHover()

    const { addCard, deleteCard } = useContext(DexContext)

    const {
        hp,
        str,
        weak
    } = cardCalculate(card)

    const {
        imageUrl,
        name
    } = card

    return (
        <Card ref={hoverRef} isMyCard={isMyCard} isHovered={isHovered}>
            <Left>
                <Image src={imageUrl}/>
            </Left>
            <Right>
                <h3>{ name }</h3>
                <PowerGauge name="HP" power={hp} isMyCard={isMyCard} />
                <PowerGauge name="STR" power={str} isMyCard={isMyCard} />
                <PowerGauge name="WEAK" power={weak} isMyCard={isMyCard} />
            </Right>
            <Action isHovered={isHovered} onClick={() => isMyCard ? deleteCard(card) : addCard(card)}>
                {isMyCard ? "X" : "Add"}
            </Action>
        
        </Card>
    )
}

const Card = styled.div`
    position: relative;
    max-height: 200px;
    margin: 10px;
    padding: 10px;
    display:flex;
    width:100%;
    background-color: #eff2f7;
    ${({isMyCard}) => {
        const percent = isMyCard ? 45 : 100
        return `flex: 0 ${percent}%;`
    }}
    ${({isHovered}) => {
        return isHovered && `
            border-color: azure;
            border-style: groove;
        `
    }}
`

const Left = styled.div`
    width: auto;
    height: 100%;
`

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
`

const Right = styled.div`
    width: 70%;
    padding-left: 20px;
`

const Action = styled.div`
    position: absolute;
    top: 8px;
    right: 16px;
    font-size: 18px;
    cursor: pointer;
    ${({isHovered}) => {
        const display = isHovered ? 'block' : 'none'
        return `display: ${display}`
    }}
`

export default PokeCard