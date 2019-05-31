import styled, { createGlobalStyle } from 'styled-components'
import 'typeface-roboto'

export const BodyStyle = createGlobalStyle`
    body {
        margin: 0;
        background-color: rgba(0,0,10,.05);
        font-family: Roboto;
        min-height: 100vh;
    }
`

export const Container =styled.section`
    display: flex;
    min-height: 100vh;
`



