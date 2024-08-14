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
                        <Bar dataKey="Spending" tickFormatter={DataFormater} stackId="a" fill="#f59793" />
                        <Bar dataKey="Income" tickFormatter={DataFormater} stackId="a" fill="#f9f8f6" />
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
      Income: 4000,
      Spending: 2400,
      amt: 2400,
    },
    {
      name: 'March',
      Income: 3000,
      Spending: 1398,
      amt: 2210,
    },
    {
      name: 'April',
      Income: 2000,
      Spending: 9800,
      amt: 2290,
    },
    {
      name: 'May',
      Income: 2780,
      Spending: 3908,
      amt: 2000,
    },
    {
      name: 'June',
      Income: 1890,
      Spending: 4800,
      amt: 2181,
    },
    {
      name: 'July',
      Income: 2390,
      Spending: 3800,
      amt: 2500,
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
