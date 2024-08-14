import React from 'react'
import styled from 'styled-components'
import { FcSimCardChip } from "react-icons/fc";
import mastercard from "../assets/mastercard.png"
import reflectcard from "../assets/reflect.png"
import choicecard from "../assets/choice.png" 
function Card() {
    return (<>
       <Section>
	   <div style={{ backgroundImage: `url(${reflectcard})` }} className="cardmain">
                
                <div className="number">
                    <h6>4562 1122 4595 7852</h6>
                </div>
                
                <div className="name">
                    <h6>John Wick</h6>
                </div>
                 
            </div>
       </Section>
	    <Section className="carddue">
            <div className='name'>
                <h4>Balance Due $1200 </h4><h7>Due Date : 28 Aug 2024</h7>
                
            </div>
		</Section> <hr class="dashed"/>
		</>
    )
}

export default Card
const Section = styled.section`
.cardmain {
    padding: 0.8rem 0.8rem 0.8rem 0.8rem;
    border-radius: 1rem;
    color: black;      
    align-items: center;
	height :220px;
	width:349px;
    
    transition: 0.5s ease-in-out;
    &:hover { 
        color: black;
        svg {
            color: black;
        }
    }
     
    .number {
        display: flex;
        gap: 0.5rem;
        margin-top: 140px;
        h6{
            color: white;
            font-size: 1rem;
        }
    }
     
    .name {
        display: flex;
        gap: 0.5rem;
    }
    h6{
        color: white;
        font-size: 0.7rem;
		 
    } 
}

.carddue {
    padding: 0.8rem 0.8rem 0.8rem 0.8rem;
    border-radius: 1rem;
    color: black;      
    align-items: center;
	height :220px;
	width:349px;
    
    transition: 0.5s ease-in-out;
    &:hover { 
        color: black;
        svg {
            color: black;
        }
    }
     
     .name {
        display: flex;
        gap: 0.5rem;
     
    h4{
        color: white;
        font-size: 0.9rem;
		 
    }
	
	h7{
        color: red;
        font-size: 0.1rem; 
		display :flex;
		top:-50px;left:350px;
		 
	 }}
}
 
`;
