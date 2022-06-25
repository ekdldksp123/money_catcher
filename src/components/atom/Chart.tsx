import React, { useEffect } from 'react';
import { useScript } from 'src/common/hooks';
import { setChartData, renderChart } from 'src/libs/chart.js';

import { ChartProps } from '@/types/atom/ChartProps';

const Chart: React.FC<ChartProps> = ({ props }) =>
{
	const status = useScript('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js');

	const initChart = () =>
	{
		const config = setChartData(props);
		renderChart(config);
	};

	useEffect(() =>
	{
		if (status === 'ready')
		{
			initChart();
		}
	}, [ status ]);

	return <canvas id='myChart' style={{ marginBottom: '40px' }} />;
};

export default Chart;