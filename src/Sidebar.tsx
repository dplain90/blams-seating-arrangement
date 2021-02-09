import * as React from 'react'
import { Guest } from './Interfaces/Guest'
import styled from 'styled-components'

interface Props {
    guests: Guest[]
}

const SidebarContainer = styled.section`
    border: 1px solid orange;
`

export function Sidebar(props: Props) {
    return (<SidebarContainer data-testid='guest-sidebar'>
        <ul>
            { props.guests.map(guest => <li data-id={guest.id} key={guest.id}>{guest.name}</li> ) }
        </ul>
    </SidebarContainer>)
}
