import React from 'react'
import styled from 'styled-components'

function PowerGauge({ name, power }) {
    return (
        <Container>
           <Label>
               { name }
            </Label>
            <GaugeWrapper>
                <GaugeInner power={power}/>
            </GaugeWrapper>
        </Container>
    )
}

const Label = styled.div`
width: 20%;
`

const Container = styled.div`
    width: 100%;
    margin-bottom: 10px;
    flex-wrap: wrap;
    display: flex;
`

const GaugeWrapper = styled.div`
    width: 70%;
    border-radius: 25px;
    background-color: #ddd
}
`
const GaugeInner = styled.div`
    padding-top: 10px;
    padding-bottom: 16px;
    border-radius: 25px;
    background-color: #f06316;
    ${({power}) => `width: ${power}%`}
}
`

export default PowerGauge