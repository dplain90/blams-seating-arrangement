import * as React from 'react';
import './App.css';
import { GuestFactory } from './Interfaces/Guest';
import { Sidebar } from './Sidebar'
import styled from 'styled-components' 



const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr; 
  grid-template-rows: 1fr;
  height: 100%;
  width: 100%;
`
const mockGuests = [ GuestFactory({id:'4'}) ]

function App() {
  return (
    <AppWrapper className="App">
      <Sidebar guests={mockGuests}></Sidebar>
    </AppWrapper>
  );
}


export default App;
