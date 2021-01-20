import React from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'

function CardList() {
    return (
        <Modal isOpen={true} style={modalStyles}>
            <SearchInput placeholder="Find Pokemon"/>
        </Modal>
    )
}

const SearchInput = styled.input`
    width:100%;
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
      width: '800px',
      height: '700px'             
    }
  };


export default CardList