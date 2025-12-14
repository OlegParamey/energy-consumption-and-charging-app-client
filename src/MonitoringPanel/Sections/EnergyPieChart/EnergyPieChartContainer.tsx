import EnergyPieChart from './EnergyPieChart';
import EnergyLabel from './EnergyLabel';
import getTextByDayKey from './utils/getTextByDayKey';
import generateDisplayDataForGenerationMix from './utils/generateDisplayData';
import type { EnergyPieChartContainerProps } from './EnergyPieChart.types';

const EnergyPieChartContainer: React.FC<EnergyPieChartContainerProps> = ({
	cleanEnergyPercent,
	generationMix,
	dayKey,
}) => {
	const displayData = generateDisplayDataForGenerationMix(generationMix);

	return (
		<div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6">
			<p className="text-xl text-center font-semibold text-gray-900">
				{getTextByDayKey(dayKey)}
			</p>
			<p className="text-center text-lg text-gray-500">
				Share of clean energy:{' '}
				<span className="text-emerald-500 text-lg font-semibold">
					{cleanEnergyPercent}%
				</span>
			</p>
			<div className="relative mb-4 flex flex-col size-fit items-center justify-center self-center">
				<EnergyPieChart displayData={displayData} />
				<div className="mt-2 flex items-center flex-wrap justify-center gap-x-3 gap-y-2 text-sm">
					{displayData.map(
						(obj) =>
							obj.value > 0 && (
								<EnergyLabel
									label={obj.label}
									value={obj.value}
									color={obj.color}
									key={`${obj.label}-${obj.value}`}
								/>
							)
					)}
				</div>
			</div>
		</div>
	);
};

export default EnergyPieChartContainer;
