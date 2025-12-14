import type { EnergyLabelProps } from './EnergyPieChart.types';

const EnergyLabel = ({ value, label, color }: EnergyLabelProps) => {
	return (
		<div className="flex items-center gap-2">
			<span
				className="size-2.5 rounded-full"
				style={{ backgroundColor: color }}
			></span>
			<span className="text-md">
				{label}: {value}%
			</span>
		</div>
	);
};

export default EnergyLabel;
