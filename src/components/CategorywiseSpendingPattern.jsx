import React from 'react'
import {   PieChart,Cell ,PolarAngleAxis ,PolarRadiusAxis,PolarGrid ,Legend ,Tooltip,Pie,Customized , ResponsiveContainer } from 'recharts';
import styled from "styled-components";
function CategorywiseSpendingPattern({activeStep}:int) {
	const DataFormater = (number) => { 
    return "$"+number.toString();
  } 
  const palette = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#0088FE', '#00C49F', '#FFBB28'  ];
   const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length   ) {
    return (
      <div className="recharts-default-tooltip" > 
         <p className="label">{`${payload[0].name} : ${DataFormater(payload[0].value)}  `}</p>  
		 <p>{`${(payload[0].value/6200 * 100).toFixed(1)}% `} of total spending</p>
      </div>
    );
  }
  return null;
};
  
  
    return (
        <Section style={{ display: activeStep===1 ? 'block' : 'none' }}>
            <div className="catwise">
                <div className="catwise_details">
                    <div>
                        <h4>CATEGORYWISE SPENDING PATTERN <h5>THIS MONTH</h5></h4>
                    </div>
                </div>
                <div className="catwise_graph">
                    <ResponsiveContainer width="100%" height="150%">
					<PieChart width={730} height={250}  fill={data.color}   > 
					<Tooltip  content={<CustomTooltip />} />
					   <Pie data={data} dataKey="value" nameKey="name"   cx="50%" cy="50%" 
					   outerRadius={80}
                    innerRadius={40}  
                                    
                    label={({ name, value  }) =>
                        `${name}: ${value} `
                    }   />
					
					{data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={palette[index % palette.length]} />
            ))}
                        <Legend   align="top" />
					</PieChart> 
                    </ResponsiveContainer>
                </div>
            </div>
        </Section>
    )
}



export default CategorywiseSpendingPattern
const data = [
    {
      name: 'Groceries', 
      value: 1110, 
	  color: '#57c0e8',
    },
    {
      name: 'Dining', 
      value: 285,
	  color: '#57c0e8'	  ,
    },
    {
      name: 'Utilities', 
      value: 445, 
	  
    },
    {
      name: 'Transportation', 
      value: 555, 
    },
    {
      name: 'Fitness', 
      value: 160, 
    },
    {
      name: 'Insurance' ,
      value: 400, 
    } ,
    {
      name: 'Clothing' ,	
      value: 290, 
    }  ,
    {
      name: 'Travel' ,	
      value: 210, 
    }  ,
    {
      name: 'Rent/Mortgage' ,	
      value: 2400, 
    } ,
    {
      name: 'Miscellaneous' ,	
      value: 55, 
    } ,
    {
      name: 'Medical' ,	
      value: 225, 
    }  ,
    {
      name: 'Entertainment' ,	
      value: 120, 
    }  

  ];
const Section = styled.section`
   
.catwise{
    color: black;
    width: 100%;
    .catwise_details {
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
    .catwise_graph{
        height: 10rem;
        width: 100%;
		.recharts-default-tooltip {
            
             
            color: black !important;
			margin: 0px;
			padding: 5px;
			background-color: #f9f8f6;
			border: 1px solid rgb(204, 204, 204);
			white-space: nowrap;
			
        }
         
    }
}

`;
