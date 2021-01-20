import React from 'react'
import styled from 'styled-components'

function PokeCard() {
    return (
        <Card>
            Poke card
        </Card>
    )
}

const Card = styled.div`
    height: 300px;
    ${({perRow}) => {
        const percent = perRow ? 100 / perRow : 100
        return `flex: 0 ${percent}%`
    }}
`

export default PokeCard