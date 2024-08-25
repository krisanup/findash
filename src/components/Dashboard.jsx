import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Analytic from './Analytic'
import Balance from './Balance'
import History from './History'  
import Example from './example'    
import Recommendations from './Recommendations' 
import Insights from './Insights'    
function Dashboard() {
    return (
        <Section>
           
            <div className="grid">        
                    <Navbar />
                    <Analytic />    
					<Recommendations />
					 <hr class="dashed"/>
					 <Insights />
					
            </div>
        </Section>
    )
}

export default Dashboard
const Section = styled.section `
margin-left: 5vw;
margin-right: 14px;
padding: 2rem;
height: 60rem;
background-color: #ffffff;
.grid{ 
    margin-top: 0.5rem;
    z-index: 2;
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
   
}

`;
