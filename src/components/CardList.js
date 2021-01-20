import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'
import axios from 'axios'

import PokeCard from './PokeCard'

function CardList() {

    const [ cards, setCards ] = useState([])
    const [ keywords, setKeywords ] = useState("")

    useEffect(() => {
        fetchCards()
    }, [ keywords ])

    const fetchCards = () => {
        axios.get('http://localhost:3030/api/cards', {
            params: {
                name: keywords
            }
        }).then(res => {
            setCards(res.data.cards)
        })
    }

    return (
        <Modal isOpen={true} style={modalStyles}>
            <SearchInput placeholder="Find Pokemon" onChange={(e) => setKeywords(e.target.value)}/>
            <CardsContainer>
                {
                    cards.map(card => <PokeCard perRow={2} card={card}/>)
                }
            </CardsContainer>
        </Modal>
    )
}

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 660px;
    overflow: auto;
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
      height: '700px'             
    }
  };


export default CardList