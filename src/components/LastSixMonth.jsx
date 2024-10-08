import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from "styled-components";
function LastSixMonth({activeStep}:int) {
	const DataFormater = (number) => { 
    return "$"+number.toString();
  } 
  const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length  ) {
    return (
      <div className="recharts-default-tooltip" > 
        <p className="desc">{`${label}`}</p>
        <p className="label">{`${payload[0].name} : ${DataFormater(payload[0].value)}`}</p> 
		<p className="label">{`${payload[1].name} : ${DataFormater(payload[1].value)}`}</p> 
      </div>
    );
  }

  return null;
};
    return (
        <Section style={{ display: activeStep===0 ? 'block' : 'none' }}>
            <div className="sixmonths">
                <div className="sixmonths__details">
                    <div>
                        <h4>SPENDING PATTERN <h5>LAST 6 MONTHS</h5></h4>
                    </div>
                </div>
                <div className="sixmonths__graph">
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
                     
						   <Tooltip  content={<CustomTooltip />} />
                        <Legend tickFormatter={DataFormater} />
                        <Bar dataKey="Income"   stroke="#B43535" tickFormatter={DataFormater} stackId="a" fill="#787070" />
						<Bar dataKey="Spending"   tickFormatter={DataFormater} stackId="b" fill="#B43535" />
                        
                     </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Section>
    )
}

export default LastSixMonth
const data = [
    {
      name: 'February',
      Income: 7000,
      Spending: 6675, 
    },
    {
      name: 'March',
      Income: 7000,
      Spending: 4260, 
    },
    {
      name: 'April',
      Income: 7000,
      Spending: 5575, 
    },
    {
      name: 'May',
      Income: 7000,
      Spending: 3460, 
    },
    {
      name: 'June',
      Income: 7000,
      Spending: 6480, 
    },
    {
      name: 'July',
      Income: 7000,
      Spending: 6780, 
    } 


  ];
const Section = styled.section`
   
.sixmonths{
    color: black;
    width: 100%;
    .sixmonths__details {
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
    .sixmonths__graph{
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
