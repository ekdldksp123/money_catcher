import React, { useEffect } from 'react';
import { useScript } from 'src/common/hooks';
import { setChartData, renderChart } from 'src/libs/chart.js';

export type ChartProps = {
    props: ChartData[]
}

export type ChartData = {
    name: string;
    amount: number;
}

const Chart: React.FC<ChartProps> = ({ props }) =>
{
	const status = useScript('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js');

	const initChart = () =>
	{
		const config = setChartData(props);
		renderChart(config);
		console.dir(config);
	};

	useEffect(() =>
	{
		if (status === 'ready')
		{
			initChart();
		}
	}, [ status ]);

	return <canvas id='myChart' />;
};

export default Chart;