import { LoaderCircle } from 'lucide-react';

export default function OptimalChargingTimeDataLoading() {
	return (
		<div className="flex items-center justify-center rounded-xl border border-dashed  bg-white border-gray-300 h-40.5">
			<div className="text-center">
				<div className="flex justify-center items-center w-full border-gray-200 h-full">
					<div className="animate-spin">
						<LoaderCircle size={60} color="#61cea0ca" strokeWidth={2} />
					</div>
				</div>
				<p className="text-gray-600">Loading optimal charging time...</p>
			</div>
		</div>
	);
}
