import React from 'react'
import { number, string } from 'prop-types'
import { DataProvider } from '@dhis2/app-runtime'
import { StickyHeaderBar } from './style'

export const Header = ({ baseUrl, appName, apiVersion }) => (
    <DataProvider baseUrl={baseUrl} apiVersion={apiVersion}>
        <StickyHeaderBar appName={appName} />
    </DataProvider>
)

Header.propTypes = {
    baseUrl: string.isRequired,
    appName: string.isRequired,
    apiVersion: number.isRequired,
}
