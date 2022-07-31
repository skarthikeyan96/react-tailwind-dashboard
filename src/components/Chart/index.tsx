import { useEffect, useState } from 'react';
import {
  Line,
  LineChart,
  ResponsiveContainer} from 'recharts';

const Chart = () => {
  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch('https://api.coincap.io/v2/assets/?limit=5');
      const data: any = await res.json();
      setChartData(data.data);
    };
    fetchPrices();
  }, []);

  const [chartData, setChartData] = useState([]);

  return (
    <ResponsiveContainer height={100} width={'90%'}>
      <LineChart width={300} height={100} data={chartData}>
        <Line
          type="monotone"
          dataKey="priceUsd"
          stroke="#8884d8"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
