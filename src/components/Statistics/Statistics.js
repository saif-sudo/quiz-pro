import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';


const Statistics = () => {
    
       
    const stats = useLoaderData().data;
    
    console.log(stats , "stats topic");
    return (
        <div>
    
            <h3>This is Statistics page</h3>

       
        <BarChart
          width={800}
          height={300}
          data={stats}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
         
        >
         
          <XAxis dataKey={stats.id} />
          <YAxis  dataKey={stats.total}/>
         
          <Bar dataKey={stats[1].total} fill="#8884d8" />
         
        </BarChart>
     


        </div>

    );
};

export default Statistics;