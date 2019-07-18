import React from 'react'
import styled from 'styled-components'
import { Tree } from '.'

const Container = styled.aside`
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    background-color: #fff;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 2rem;
`

export const Sidebar = () => (
    <Container>
        <Title>OU Code</Title>
        <Tree />
    </Container>
)