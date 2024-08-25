import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from "styled-components";
function WeeklySpendingPattern({activeStep}:int) {
	const DataFormater = (number) => { 
    return "$"+number.toString();
  } 
  const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length   ) {
    return (
      <div className="recharts-default-tooltip" > 
        <p className="desc">{`${label}`}</p>
        <p className="label">{`${payload[0].name} : ${DataFormater(payload[0].value)}`}</p>  
      </div>
    );
  }

  return null;
};
    return (
        <Section style={{ display: activeStep===2 ? 'block' : 'none' }}>
            <div className="weekly">
                <div className="weekly_details">
                    <div>
                        <h4>WEEKLY SPENDING PATTERN <h5>THIS MONTH</h5></h4>
                    </div>
                </div>
                <div className="weekly_graph">
                    <ResponsiveContainer width="100%" height="150%">

                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={DataFormater}  /> 
						   <Tooltip  content={<CustomTooltip />}  />
                        <Legend tickFormatter={DataFormater} />
                        <Bar dataKey="Spending"   tickFormatter={DataFormater} stackId="b" fill="#B43535" />
                        
                     </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Section>
    )
}

export default WeeklySpendingPattern
const data = [
    {
      name: 'Sun', 
      Spending: 600, 
    },
    {
      name: 'Mon', 
      Spending: 450, 
    },
    {
      name: 'Tue', 
      Spending: 400, 
    },
    {
      name: 'Wed', 
      Spending: 500, 
    },
    {
      name: 'Thu', 
      Spending: 350, 
    },
    {
      name: 'Fri' ,
      Spending: 2100, 
    } ,
    {
      name: 'Sat' ,	
      Spending: 1800, 
    } 


  ];
const Section = styled.section`
   
.weekly{
    color: black;
    width: 100%;
    .weekly_details {
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
    .weekly_graph{
        height: 10rem;
        width: 100%;
        .recharts-default-tooltip {
            background-color: black !important;
            border-color: black !important;
            color: white !important;
			margin: 0px;
			padding: 10px;
			background-color: rgb(255, 255, 255);
			border: 1px solid rgb(204, 204, 204);
			white-space: nowrap;
			
        }
    }
}

`;
