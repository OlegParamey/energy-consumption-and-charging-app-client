import { CloudOffIcon } from '../../Icons';

const EnergyPieChartError = ({ error }: { error: string }) => {
	return (
		<div className="flex flex-col gap-10 justify-center items-center w-full rounded-xl border border-gray-200 bg-white p-6 h-107">
			<CloudOffIcon />
			<div className="text-center">
				<h1 className="text-3xl text-rose-600">{error}</h1>
				<h2 className="text-lg text-gray-400">Try to refresh the page</h2>
			</div>
		</div>
	);
};

export default EnergyPieChartError;
