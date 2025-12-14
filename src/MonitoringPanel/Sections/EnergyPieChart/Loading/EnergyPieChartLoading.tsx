import { LoaderCircle } from 'lucide-react';
const EnergyPieChartLoading = () => {
	return (
		<>
			<EnergyPieChartLoadingContainer key="pie-chart-loader-1" />
			<EnergyPieChartLoadingContainer key="pie-chart-loader-2" />
			<EnergyPieChartLoadingContainer key="pie-chart-loader-3" />
		</>
	);
};

function EnergyPieChartLoadingContainer() {
	return (
		<div className="flex justify-center items-center w-full rounded-xl border border-gray-200 bg-white p-6 h-107">
			<div className="animate-spin">
				<LoaderCircle size={120} color="#61cea0ca" strokeWidth={2} />
			</div>
		</div>
	);
}

export default EnergyPieChartLoading;
