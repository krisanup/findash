import React from 'react'
import styled from 'styled-components'
import Notification from './Notification'
import Card from './Card'
import Activity from './Activity'
import Payment from './Payment'

function RightSidebar() {
    return (
        <Section>
            <div className="grid">
            <Notification />
            <Card />
            <Activity />
            <Payment />

            </div>
        </Section>
    )
}

export default RightSidebar
const Section = styled.section`
   position: absolute;
    right: 0;
    top: 80px;
    background-color: #f9f8f6;
    height: 100vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0.5rem;
    gap: 2rem;
    .grid{
        z-index: 2;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;
