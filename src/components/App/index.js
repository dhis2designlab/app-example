import React from 'react'
import { Header, Sidebar } from '..'
import { BodyStyle, Container } from './style'

export const App = () => (
    <>
        <BodyStyle />
        <Header/>
        <Container>
            <Sidebar/>
        </Container>
    </>
)



