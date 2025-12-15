import { LoaderCircle } from 'lucide-react';

export default function EnergyPieChartLoaderContainer() {
	return (
		<div className="flex justify-center items-center w-full rounded-xl border border-gray-200 bg-white p-6 h-107">
			<div className="animate-spin">
				<LoaderCircle size={120} color="#61cea0ca" strokeWidth={2} />
			</div>
		</div>
	);
}
