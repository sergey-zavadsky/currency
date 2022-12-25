import { React, useEffect, useState } from 'react';
import {
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	AreaChart,
	Area,
} from 'recharts';
import { getCurrencyHistorical } from '../../api/currency/currency';

const endpoint = 'historical';
const params = 'USD';

const Chart = () => {
	const [chartData, setChartData] = useState([]);
	const [changedData, setChangedData] = useState([]);

	useEffect(() => {
		getCurrencyHistorical(params, endpoint).then((response) => {
			setChartData(response.data);
		});
	}, []);

	const changeArr = (data) => {
		let arr = [];
		for (let key in data.data) {
			arr.push({ name: key, ...data.data[key] });
		}
		return arr;
	};
	if (chartData.length !== 0 && changedData.length === 0) {
		return setChangedData(changeArr(chartData));
	}
	return (
		<AreaChart
			width={1000}
			height={250}
			data={changedData}
			margin={{ top: 50, right: 30, left: 50, bottom: 50 }}
		>
			<defs>
				{/* <linearGradient id="colorCAD" x1="0" y1="0" x2="0" y2="1">
					<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
					<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
				</linearGradient>
				<linearGradient id="colorUSD" x1="0" y1="0" x2="0" y2="1">
					<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
					<stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
				</linearGradient>
				<linearGradient id="colorEUR" x1="0" y1="0" x2="0" y2="1">
					<stop offset="5%" stopColor="black" stopOpacity={0.5} />
					<stop offset="95%" stopColor="black" stopOpacity={0} />
				</linearGradient> */}
			</defs>
			<XAxis dataKey="name" />
			<YAxis />
			<CartesianGrid strokeDasharray="1 1" />
			<Tooltip />
			{/* <Area
				type="monotone"
				dataKey="PLN"
				stroke="#8884d8"
				fillOpacity={1}
				fill="url(#colorCAD)"
			/>
			<Area
				type="monotone"
				dataKey="RUB"
				stroke="#82ca9d"
				fillOpacity={1}
				fill="url(#colorEUR)"
			/> */}
			<Area
				type="monotone"
				dataKey="USD"
				stroke="#12ca9d"
				fillOpacity={1}
				fill="url(#colorUSD)"
			/>
		</AreaChart>
	);
};

export default Chart;
