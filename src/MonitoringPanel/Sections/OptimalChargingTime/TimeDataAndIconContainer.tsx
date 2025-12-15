import type { TimeDataAndIconContainerProps } from './OptimalChargingTime.type';

const TimeDataAndIconContainer: React.FC<TimeDataAndIconContainerProps> = ({
	isStart = false,
	children,
	day,
	time,
}) => {
	return (
		<div className="flex items-center gap-3">
			{children}
			<div>
				<p className="text-base text-gray-500">{isStart ? 'Start' : 'End'}</p>
				<p className="text-base font-semibold text-gray-900 text-wrap">{day}</p>
				<p className="text-sm font-semibold text-emerald-500 text-wrap">
					at {time}
				</p>
			</div>
		</div>
	);
};

export default TimeDataAndIconContainer;
