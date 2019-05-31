import React from 'react'
import { DataProvider } from '@dhis2/app-runtime'
import { StickyHeaderBar } from './style'

export const Header = () => (
    <DataProvider baseUrl={'https://play.dhis2.org/2.30'} apiVersion={30}>
        <StickyHeaderBar appName={'App'} />
    </DataProvider>
)

