import React from 'react'
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
