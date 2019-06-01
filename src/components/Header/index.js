import React from 'react'
import { DataProvider } from '@dhis2/app-runtime'
import { StickyHeaderBar } from './style'

export const Header = ({ baseUrl, appName, apiVersion }) => (
    <DataProvider baseUrl={baseUrl} apiVersion={apiVersion}>
        <StickyHeaderBar appName={appName} />
    </DataProvider>
)
