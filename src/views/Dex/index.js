import React, { useContext, useEffect, useState } from 'react'
import { DexContext } from '../../stores/DexProvider'
import styled from 'styled-components'
import axios from 'axios'

import CardList from '../../components/CardList'
import MyCardList from '../../components/MyCardList'

function Dex() {

    const { dex, addCard, DeleteCard } = useContext(DexContext)

    
    return (
        <>
            <TopBar> <h1>My Pokédex</h1> </TopBar>
            <MyCardList />
            <BottomBar>
                <CardModalButton> + </CardModalButton>
            </BottomBar>
            <CardList />
        </>
    )
}

const TopBar = styled.div`
    position: absolute; 
    width: 100%;
    top: 0;
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