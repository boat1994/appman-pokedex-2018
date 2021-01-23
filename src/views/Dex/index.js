import React, { useState } from 'react'
import styled from 'styled-components'

import CardList from '../../components/CardList'
import MyCardList from '../../components/MyCardList'

function Dex() {

    const [cardListOpen, setCardLisOpen] = useState(false)
    
    return (
        <>
            <TopBar> <h1>My Pokédex</h1> </TopBar>
            <MyCardList />
            <BottomBar>
                <CardModalButton onClick={() => setCardLisOpen(true)}> + </CardModalButton>
            </BottomBar>
            <CardList isOpen={cardListOpen} onRequestClose={() => setCardLisOpen(false)} />
        </>
    )
}

const TopBar = styled.div`
    position: relative; 
    text-align: center;
`
const BottomBar = styled.div`
    position: absolute; 
    width: 100%;
    bottom: 0;
    height: 80px;
    background-color: #e54c45;
    text-align: center;
`

const CardModalButton = styled.button`
    border-radius: 50%;
    height: 100px;
    width: 100px;
    margin-top: -45px;
    color: white;
    background: #e54c45;
    font-size: 60px;
    border: none;
`

export default Dex