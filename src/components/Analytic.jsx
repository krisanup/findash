import React from 'react'
import styled from 'styled-components'
import { BsCreditCard } from "react-icons/bs";
import { AiOutlineMore } from "react-icons/ai"; 
import { BsBank } from "react-icons/bs";
import { FaSackDollar  } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";

function Analytic() {
    return (
        <Section>
            
			<div className="analytic ">
                <div className="design">
                    <div className="logo">
                        <BsBank />
                    </div>
                     
                </div>
                <div className="transfer">
                    <h6>Available </h6>
                    <h6>Balance</h6>
                </div>
                <div className="money">
                    <h5>$1500</h5>
                </div>
            </div>
            <div className="analytic ">
                <div className="design">
                    <div className="logo">
                        <GiTakeMyMoney />
                    </div>
                    
                </div>
                <div className="transfer">
                    <h6>Last Month </h6>
                    <h6>Savings</h6>
                </div>
                <div className="money">
                    <h5>$1500</h5>
                </div>
            </div>
			<div className="analytic ">
                <div className="design">
                    <div className="logo">
                        <BsCreditCard />
                    </div>
                    
                </div>
                <div className="transfer">
                    <h6>Outstanding</h6>
                    <h6>Amount</h6>
                </div>
                <div className="money">
                    <h5>$1200</h5>
                </div>
            </div>
            <div className="analytic ">
                <div className="design">
                    <div className="logo">
                        <FaSackDollar />
                    </div>
                    
                </div>
                <div className="transfer">
                    <h6>Investments </h6>
                    <h6>Equity/Debt</h6>
                </div>
                <div className="money">
                    <h5>$62,000</h5>
                </div>
            </div>
            
         
          
         
           
        </Section>
    )
}

export default Analytic
const Section = styled.section `
    display: flex;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    margin: 0 60px;
    .analytic {
        justify-content: space-between;
        padding: 1rem 2rem 1rem 2rem;
        border-radius: 1rem;
        color: black;
        background-color: #f9f8f6;
        justify-content: space-evenly;
        align-items: center;
        transition: 0.5s ease-in-out;
        width: 270px;
       
        .design{
            display: flex;
            align-items: center;
            
            .logo {
                background-color: white;
                display: flex;
                justify-content: center;
                align-items: center;
               
                svg {
                    font-size: 2rem;
                }
            }
            .action {
                margin-left: 80px;
               svg{
                font-size: 1.5rem;
               }
            }

        }
        .transfer {
            margin-top: 20px;
            color: grey
        }
        .money {
            margin-top: 20px;  
        }
    }
`;
