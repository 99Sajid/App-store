import React from 'react';
import { BarChart, Bar,XAxis,YAxis,Tooltip,ResponsiveContainer } from 'recharts';


const BarCharts = ({data}) => {
    return (
       <div className='w-full h-64 mt-6'>
       <div><h2 className='text-xl font-semibold'>Rating</h2></div>
       <ResponsiveContainer className='h-full w-full '>
      <BarChart data={[...data].reverse()}  layout="vertical" barCategoryGap="25%">
      
      <XAxis type='number'  axisLine={false} tickLine={false}  />
      <YAxis  dataKey='name' type='category'  axisLine={false} tickLine={false} />
      <tooltip/>
      <Bar dataKey='count' fill='#f59e0b'/>
      </BarChart>
       </ResponsiveContainer>
       </div>
    );
};

export default BarCharts;