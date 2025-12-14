import UseFetchEnergyMix from '../../../hooks/fetch/UseFetchEnergyMix';
import EnergyPieChartContainer from './EnergyPieChartContainer';
import EnergyPieChartLoading from './Loading/EnergyPieChartLoading';

const CircleDiagramsSection = () => {
	const URL = 'http://localhost:3000/generation-mix-for-three-next-days';

	const { data, loading, error } = UseFetchEnergyMix(URL);

	if (error !== null) {
		console.log(error);
	}

	return (
		<section className="flex flex-col gap-6">
			<h2 className="px-1 text-2xl text-center font-bold text-gray-900">
				Energy mixes:
			</h2>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{data !== null &&
					data.map(({ dayKey, cleanEnergyPercent, generationMix }) => (
						<EnergyPieChartContainer
							generationMix={generationMix}
							key={`${cleanEnergyPercent}-${dayKey}`}
							cleanEnergyPercent={cleanEnergyPercent}
							dayKey={dayKey}
						/>
					))}
				{loading && <EnergyPieChartLoading />}
			</div>
		</section>
	);
};

export default CircleDiagramsSection;
