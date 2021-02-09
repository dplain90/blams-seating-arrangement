import React from 'react'
import { render, screen } from '@testing-library/react';
import {GuestFactory} from './Interfaces/Guest'
import {Sidebar} from './Sidebar'

it('dispalys a list of guests', () => {
    const newGuests = [GuestFactory({id: '10'}), GuestFactory({name: 'Javcob', id: '5'}), GuestFactory({name: 'Yoyoma'})]
    const {  getAllByRole } = render(<Sidebar guests={newGuests} />)
    
    const guests =  getAllByRole('listitem')
    expect(guests).toHaveLength(3)
})

it('matches snapshot', () => {
    const newGuests = [GuestFactory({name: 'jack', id: 'arbitrary-id-1'}), GuestFactory({name: 'Javcob', id: 'second-id'}), GuestFactory({name: 'Yoyoma'})]
    const { container, getAllByRole } = render(<Sidebar guests={newGuests} />)
    expect(container.firstChild).toMatchSnapshot()
})