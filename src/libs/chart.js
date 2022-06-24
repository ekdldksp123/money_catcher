let chart;

export const setChartData = (result) =>
{
	const xValues = result.map((v) => v.name);
	const yValues = result.map((v) => v.amount);
	// const bgColors = [ 'rgb(54, 162, 235)', 'rgb(255, 99, 132)' ];
	const bgColors = [ '#2196f38c', '#f443368c', '#3f51b570', '#00968896' ];

	const config = {
		data: {
			datasets: [{
				backgroundColor: bgColors,
				data: yValues
			}],
			labels: xValues
		},
		options: {
			title: {
				display: true,
				text: 'Savings & Investment'
			}
		},
		type: 'doughnut'
	};

	return config;
};

export const renderChart = (config) =>
{
	if (chart) chart.destroy();
	const ctx = document.getElementById('myChart').getContext('2d');
	// eslint-disable-next-line no-undef
	chart = new Chart(ctx, config);

	return chart;
};