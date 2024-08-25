import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper} from '@mui/material'
import Button, { ButtonProps } from '@mui/material/Button';
import styled from "styled-components";
import choice from '../assets/choice.png' 
import activecash from '../assets/activecash.png'
import back1 from '../assets/rec-back-1.png'
import back2 from '../assets/rec-back-3.png'
import back3 from '../assets/rec-back-4.png'

function Recommendations(props) {
	const CallActionButton = styled(Button)({
		  boxShadow: 'none',
		  textTransform: 'none',
		  fontSize: 16,
		  padding: '6px 12px',
		  border: '1px solid',
		  lineHeight: 1.5,
		  backgroundColor: '#0063cc',
		  borderColor: '#0063cc', 
	});
    var items = [
        {
            name: "Wells Fargo Active Cash® Credit Card",
            description: "Earn a $200 cash rewards bonus when you spend $500 in purchases in the first 3 month",
			special: "Best suited for you since your spend from Walmart & C",
			button: "More Details",
            imageurl:back1
          
        },
        {
            name: "Personal loan for Debt Consolidation",
            description: "Simplify your finances by consolidating higher-interest debt with Personal Loan rates as low as 7.49% APR",
			special: "Best suited for you since you have multiple installments.",
			button: "Personal loan options",
            imageurl:back2
        },
        {
            name: "Lower your interest paid which may reduce your debt faster",
            description: "Our Debt Consolidation Calculator estimates options for reduced interest and payment terms.",
			special: "Best suited for you since you are spending on Mortgage more",
			button: "Debt Consolidation Calculator",
            imageurl:back3
        }
    ]

    return (
        <Section>
            <div className="recommendations">
			 <div className="recomm_details">
                    <div>
                        <h4>RECOMMENDATIONS</h4>
                    </div> 
                </div>
                <div className="rec_graph">


                    <Carousel>
                        {
                            items.map((item, i) => <Item key={i} item={item} />)
                        }
                    </Carousel>

                </div>
            </div>
        </Section>
    )
}
const Section = styled.section`.recomm{ 

	
		position:relative;  
		margin-left:20px;		
		height:423px;
		width:800px;
		.recomm_details{
			display: flex;
			justify-content: space-between;
			margin: 1rem 0;
			div{
            display: flex;
            gap: 1rem;
            h5{
                color: gray;
            }
        }
		}
      .title {
		  position:absolute;
		  margin-top:50px;
		  margin-left:20px;
		  font-size: 2.82352941rem;
          line-height: 1.17; 
		  color:#946e3a; 
	  }
	  .desc {
		  position:absolute;
		  margin-top:180px;
		  width:550px;
		  margin-left:80px; color: #141414;  
		line-height: 31px;
		  font-weight: 600;
    }
	  }
	  .special {
		  position:absolute; 
		  margin-top:350px;
		  margin-left:50px;
	  }
        
      .callaction{
		  position:absolute;
		  margin-top:300px;
		      display: inline-block;
			font-weight: 600; 
			margin-top: 280px; 
			margin-left: 450px;
			font-color:white;
		    background-color: #d71e28;
		    border-color: #d71e28; borderRadius: "0.8rem";
			:hover: {
				background-color: #d71e28; 
				color:Red;
			  } 

	  }  
	   
	   
        .MuiButtonBase-root {
		       opacity: 100 !important;
	   }
	   .image{
		   margin-left:220px;
		   width:80%
		   height:80%;
	   }
	   . css-1abc02a {margin-left:-20px;} /* right*/
	   . css-hn784z{}
	   .css-1f8sh1y{}
}

                    `;
function Item(props) {
    return (
        <Paper className="recomm"	>
            
			<div className="title">{props.item.name}</div>
			 <p className="desc">{props.item.description}</p>
			 <div className="special">{props.item.special}</div>
			  <Button    className="callaction" variant="contained" >
               {props.item.button} 
            </Button>
			  
            <img className="image" src={props.item.imageurl} /> 
           
           
        </Paper>
    )
}

export default Recommendations; 