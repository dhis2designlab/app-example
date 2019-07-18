import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Sidebar, Main } from '.'
import { getOrgUnit } from '../api'

const Container = styled.section`
    display: flex;
    margin-top: 48px;
    min-height: calc(100vh - 48px);
`

export const Content = () => {
    const [orgUnit, setOrgUnit] = useState(null)

    useEffect(() => {
        const init = async () => {
            const data = await getOrgUnit('O6uvpzGd5pu')
            if (!data) return
            setOrgUnit(data)
        }
        init()
    }, [])

    if (!orgUnit) return null

    return (
        <Container>
            <Sidebar />
            <Main orgUnit={orgUnit} />
        </Container>
    )
}
