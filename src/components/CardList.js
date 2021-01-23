import React, { useState, useEffect, useContext } from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'

import { DexContext } from '../stores/DexProvider'
import PokeCard from './PokeCard'
import { getCards } from '../services'

function CardList({ isOpen, onRequestClose }) {

    const [ cards, setCards ] = useState([])
    const [ keywords, setKeywords ] = useState("")

    const { dex: { myCards } } = useContext(DexContext)

    useEffect(() => {
        Modal.setAppElement('body');
    })

    useEffect(() => {   
       getCards(keywords).then(res => setCards(res))
    }, [ keywords ])

    return (
        <Modal isOpen={isOpen} style={modalStyles} onRequestClose={onRequestClose}>
            <SearchInput placeholder="Find Pokemon" value={keywords} onChange={(e) => setKeywords(e.target.value)}/>
            <CardsContainer>
                {
                    cards.filter(card => !myCards.map(card => card.id).includes(card.id))
                    .map((card, index) => <PokeCard key={`cards-${index}`} card={card}/>)
                }
            </CardsContainer>
        </Modal>
    )
}

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 700px;
    overflow-y:scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    
`

const SearchInput = styled.input`
    width:98%;
    height: 30px;
    border-color: #eaeaea;
    background-image: url('./search.png');
    background-position: right;
    background-repeat: no-repeat;
    background-size: 30px 30px;
    font-family:'Atma:700', 'Gaegu';
    font-size: 20px
`

const modalStyles = {
    content : {
      top : '50%',
      left : '50%',
      right : 'auto',
      bottom : 'auto',
      marginRight : '-50%',
      transform : 'translate(-50%, -50%)',
      width: '850px',
      height: '700px',
      overflow: 'hidden'          
    }
  };

export default CardList