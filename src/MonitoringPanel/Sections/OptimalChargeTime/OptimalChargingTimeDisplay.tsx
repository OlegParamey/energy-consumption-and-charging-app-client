import type { OptimalChargingTimeResponseType } from './OptimalChargingTime.type';

import { FlagIcon, TimerIcon, ZapIcon } from '../../../components/Icons';
import TimeDataAndIconContainer from './TimeDataAndIconContainer';

type OptimalChargingTimeDisplayProps = {
	data: OptimalChargingTimeResponseType;
	rangeValue: number;
};

const OptimalChargingTimeDisplay = ({
	data,
	rangeValue,
}: OptimalChargingTimeDisplayProps) => {
	return (
		<div className="flex flex-col justify-center rounded-xl border border-dashed border-gray-300 bg-white p-6">
			<h3 className="text-lg font-semibold text-gray-900">
				Optimal window within{' '}
				<span className="text-emerald-500">
					{rangeValue} {rangeValue === 1 ? 'hour' : 'hours'}
				</span>
			</h3>
			<div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
				<TimeDataAndIconContainer
					isStart
					day={data.start.date}
					time={data.start.time}
				>
					<TimerIcon />
				</TimeDataAndIconContainer>

				<TimeDataAndIconContainer day={data.end.date} time={data.end.time}>
					<FlagIcon />
				</TimeDataAndIconContainer>

				<CleanEnergyForOptimalRangeContainer
					averageCleanEnergyPercent={data.averageCleanEnergyPercent}
				/>
			</div>
		</div>
	);
};

const CleanEnergyForOptimalRangeContainer = ({
	averageCleanEnergyPercent,
}: {
	averageCleanEnergyPercent: number;
}) => {
	return (
		<div className="flex items-center gap-3">
			<ZapIcon />
			<div>
				<p className="text-sm text-gray-500">Clean Energy Share:</p>
				<p className="font-semibold text-emerald-500">
					{averageCleanEnergyPercent}%
				</p>
			</div>
		</div>
	);
};

export default OptimalChargingTimeDisplay;
