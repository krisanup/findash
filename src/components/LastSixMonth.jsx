import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from "styled-components";
function LastSixMonth() {
	const DataFormater = (number) => { 
    return "$"+number.toString();
  } 
    return (
        <Section>
            <div className="sales">
                <div className="sales__details">
                    <div>
                        <h4>SPENDING PATTERN</h4>
                    </div>
                    <div>
                        <h5>LAST 6 MONTHS</h5>
                    </div>
                </div>
                <div className="sales__graph">
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
                        <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
                        <Legend tickFormatter={DataFormater} />
                        <Bar dataKey="Income"   stroke="#B43535" tickFormatter={DataFormater} stackId="a" fill="#F9F8F6" />
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
.sales{
    color: black;
    width: 100%;
    .sales__details {
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
    .sales__graph{
        height: 10rem;
        width: 100%;
        .recharts-default-tooltip {
            background-color: black !important;
            border-color: black !important;
            color: white !important;
			
        }
    }
}

`;
