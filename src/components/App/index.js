import React from 'react'
import { number, string } from 'prop-types'
import { Header } from '..'
import { BodyStyle } from './style'
import { Content } from '../Content'

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
