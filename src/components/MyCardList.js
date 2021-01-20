import React from 'react'
import styled from 'styled-components'

function CardList() {
    return (
        <MyCards>
            this is my card list
        </MyCards>
    )
}


const MyCards = styled.div`
    margin-top: 75px;
    display: flex;
    flex-wrap: wrap;
    height: 620px;
    overflow: auto;
`

export default CardList