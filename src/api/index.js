import { get, put } from './crud'

export { setBaseUrl } from './crud'

export const getOrgUnit = async orgUnitId => {
    const response = await get(`organisationUnits/${orgUnitId}?paging=false`)

    if (response.status === 'ERROR') {
        console.error(response.message)
        return
    }

    return response
}

export const setOrgUnitCode = async orgUnit => {
    const response = await put(`organisationUnits/${orgUnit.id}`, orgUnit)
    return response.status === 'OK'
}
