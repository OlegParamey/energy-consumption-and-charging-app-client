import { CloudOffIcon } from '../../Icons';

export default function OptimalChargingTimeDataError({ error }: { error: string }) {
	return (
		<div className="flex items-center justify-center gap-5 rounded-lg border border-dashed bg-white border-gray-300 p-8">
			<CloudOffIcon size={40} />
			<div className="text-center">
				<h1 className="text-2xl text-rose-500">{error}</h1>
				<h2 className="text-base text-gray-400">Try to refresh the page</h2>
			</div>
		</div>
	);
}
