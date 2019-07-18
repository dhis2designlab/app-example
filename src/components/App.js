import React from 'react'
import { number, string } from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import { Header, Content } from '.'
import 'typeface-roboto'

const BodyStyle = createGlobalStyle`
    body {
        margin: 0;
        background-color: rgba(0,0,10,.05);
        font-family: Roboto;
    }
`

export const App = ({ baseUrl, appName, apiVersion }) => (
    <>
        <BodyStyle />
        <Header baseUrl={baseUrl} appName={appName} apiVersion={apiVersion} />
        <Content />
    </>
)

App.propTypes = {
    baseUrl: string.isRequired,
    appName: string.isRequired,
    apiVersion: number.isRequired,
}
