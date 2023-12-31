import { PieChart, Pie,  ResponsiveContainer } from 'recharts';


const Statistics = () => {

    const data = [
        { name: 'Group A', value: 300},
        { name: 'Group B', value: 400 },
        { name: 'Group C', value: 300 },
        // { name: 'Group D', value: 200 },
      ];
    return (
        <div className='flex justify-center h-screen'>
             
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={ResponsiveContainer}
            outerRadius={80}
            fill="#FF444A"
            dataKey="value"
          >
            {/* {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))} */}
          </Pie>
        </PieChart>
        </div>
    );
};

export default Statistics;