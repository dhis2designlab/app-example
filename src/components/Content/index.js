import React, { useState, useEffect } from 'react'
import { Sidebar, Main } from '..'
import { getOrgUnit } from '../../api'
import { Container } from './style'

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
