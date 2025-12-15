import { Flag, Timer, Zap, CloudOff } from 'lucide-react';
import type { IconContainerProps } from '../MonitoringPanel/Sections/OptimalChargingTime/OptimalChargingTime.type';

const ZapIcon = () => {
	return (
		<IconContainer>
			<Zap />
		</IconContainer>
	);
};
const FlagIcon = () => {
	return (
		<IconContainer>
			<Flag />
		</IconContainer>
	);
};
const TimerIcon = () => {
	return (
		<IconContainer>
			<Timer />
		</IconContainer>
	);
};

const CloudOffIcon = ({ size = 60 }) => {
	return (
		<div className="flex size-fit animate-pulse p-2 items-center justify-center rounded-xl bg-rose-500/20 text-rose-500">
			<CloudOff size={size} />
		</div>
	);
};

const IconContainer: React.FC<IconContainerProps> = ({ children }) => {
	return (
		<div className="flex size-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
			{children}
		</div>
	);
};

export { FlagIcon, TimerIcon, ZapIcon, CloudOffIcon };
