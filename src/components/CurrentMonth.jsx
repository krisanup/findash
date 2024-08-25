/* eslint-disable no-shadow */
import React, { PureComponent } from 'react';
import styled from 'styled-components'
import { PieChart, Pie, Cell ,Legend, Tooltip,} from 'recharts';

const RADIAN = Math.PI / 180;
const DataFormater = (number) => { 
  return "$"+number.toString();
} 
const data = [
  { name: 'Spending', value: 6200, color: '#FF8042' },
  { name: 'Balance', value: 800, color: '#00C49F' }, 
];
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;
const value = 6200;

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
  ];
};

export default class CurrentMonth extends PureComponent {
  render() {
    return ( 
      <Section>
	  <div className='title'>
                <h4>Current Month</h4>
	  </div>
	
	  <PieChart   width={310} height={250}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="#CCCBCA" 
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {needle(value, data, cx, cy, iR, oR, '#175291')}
        <Tooltip formatter={(value) => `$${value.toFixed(2)}`} /> 
     
      </PieChart> 
	  <hr class="dashed"/>
	  </Section>
    );
  }
} 

const Section = styled.section`
gap: 0.2rem;
    .title{
        margin-left: 15px;
        h4{
            font-weight:bold;
        }
        h6{
            color: grey;
        }
    }
`;
