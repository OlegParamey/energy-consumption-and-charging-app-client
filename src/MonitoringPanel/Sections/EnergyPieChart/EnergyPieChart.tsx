import { PieChart } from '@mui/x-charts/PieChart';
import type { EnergyPieChartProps } from './EnergyPieChart.types';

const EnergyPieChart: React.FC<EnergyPieChartProps> = ({ displayData }) => {
	return (
		<PieChart
			hideLegend
			series={[
				{
					data: displayData,
					innerRadius: 0,
				},
			]}
			width={250}
			height={250}
		/>
	);
};

export default EnergyPieChart;
