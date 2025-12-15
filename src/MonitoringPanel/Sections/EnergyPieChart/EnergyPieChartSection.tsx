import UseFetchEnergyMix from '../../../hooks/fetch/UseFetchEnergyMix';
import EnergyPieChartContainer from './EnergyPieChartContainer';
import EnergyPieChartLoading from '../../../components/Loading/EnergyPieChart/EnergyPieChartLoading';
import EnergyPieChartError from '../../../components/Error/EnergyPieChart/EnergyPieChartError';

const EnergyPieChartSection = () => {
	const { data, loading, error } = UseFetchEnergyMix();

	if (error !== null) {
		console.log(error);
	}

	return (
		<section className="flex flex-col gap-3">
			<h2 className="px-1 text-3xl text-center font-bold text-gray-700">
				Energy mixes
			</h2>
			{error !== null && !loading && <EnergyPieChartError error={error} />}
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{error === null && loading && <EnergyPieChartLoading />}
				{error === null &&
					!loading &&
					data != null &&
					data.map(({ dayKey, cleanEnergyPercent, generationMix }) => (
						<EnergyPieChartContainer
							generationMix={generationMix}
							key={`${cleanEnergyPercent}-${dayKey}`}
							cleanEnergyPercent={cleanEnergyPercent}
							dayKey={dayKey}
						/>
					))}
			</div>
		</section>
	);
};

export default EnergyPieChartSection;
