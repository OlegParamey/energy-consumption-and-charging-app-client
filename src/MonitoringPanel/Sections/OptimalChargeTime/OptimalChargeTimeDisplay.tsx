import { Flag, Timer, Zap } from 'lucide-react';
import type {
	IconContainerProps,
	OptimalChargingTimeResponseType,
	TimeAndIconContainerProps,
} from './OptimalChargeTime.type';

type OptimalChargeTimeDisplayProps = {
	data: OptimalChargingTimeResponseType;
};

const OptimalChargeTimeDisplay = ({ data }: OptimalChargeTimeDisplayProps) => {
	console.log(data);
	return (
		<div className="flex flex-col justify-center rounded-xl border border-dashed border-gray-300 bg-white/50 p-6">
			<h3 className="text-lg font-semibold text-gray-900">The most optimal time</h3>
			<div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
				<TimeAndIconContainer
					isStart={true}
					day={data.start.date}
					time={data.start.time}
				>
					<IconContainer>
						<Timer />
					</IconContainer>
				</TimeAndIconContainer>

				<TimeAndIconContainer day={data.end.date} time={data.end.time}>
					<IconContainer>
						<Flag />
					</IconContainer>
				</TimeAndIconContainer>

				<div className="flex items-center gap-3">
					<IconContainer>
						<Zap />
					</IconContainer>
					<div>
						<p className="text-sm text-gray-500">Clean Energy</p>
						<p className="font-semibold text-emerald-500">
							{data.averageCleanEnergyPercent}%
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const TimeAndIconContainer: React.FC<TimeAndIconContainerProps> = ({
	isStart = false,
	children,
	day,
	time,
}) => {
	return (
		<div className="flex items-center gap-3">
			{children}
			<div>
				<p className="text-sm text-gray-500">{isStart ? 'Start' : 'End'}</p>
				<p className="text-sm font-semibold text-gray-900 text-wrap">
					{day}
					<br /> at {time}
				</p>
			</div>
		</div>
	);
};

const IconContainer: React.FC<IconContainerProps> = ({ children }) => {
	return (
		<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
			{children}
		</div>
	);
};

export default OptimalChargeTimeDisplay;
