import React from 'react'
import styled from 'styled-components'
import PowerGauge from './PowerGauge'

function PokeCard({card, perRow}) {

    return (
        <Card perRow>
            <Left>
                <Image src={card.imageUrl}/>
            </Left>
            <Right>
                <h3>{ card.name }</h3>
                <PowerGauge name="HP" power={calHP(card.hp)}/>
                <PowerGauge name="STR" power={calStr(card.attacks ? card.attacks.length : 0)}/>
                <PowerGauge name="WEAK" power={calWeak(card.weaknesses ? card.weaknesses.length : 0)}/>
            </Right>
        </Card>
    )
}

const calHP = (hp) => hp < 100 ? hp : 100
const calStr = (str) => str * 50 > 100 ? str * 50 : 100
const calWeak = (weak) => weak * 100 > 100 ? weak * 100 : 100
const calHappiness = (card) => {
    return 
}

const Card = styled.div`
    height: 250px;
    margin: 10px;
    padding: 10px;
    display:flex;
    width:100%;
    background-color: #eff2f7;
    ${({perRow}) => {
        const percent = perRow ? 100 / perRow : 100
        return `flex: 0 ${percent}%`
    }}
`

const Left = styled.div`
    width: 30%;
    height: 100%;
`

const Image = styled.img`
    width:100%;
    height:100%;
`

const Right = styled.div`
    width: 70%;
    padding-left: 20px;
`

export default PokeCard