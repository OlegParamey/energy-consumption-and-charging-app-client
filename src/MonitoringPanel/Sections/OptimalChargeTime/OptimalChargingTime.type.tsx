export interface TimeDataAndIconContainerProps {
	children: React.ReactNode;
	time: TimeString;
	day: string;
	isStart?: boolean;
}

type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type Hour = `${0 | 1}${Digit}` | `2${0 | 1 | 2 | 3}`;
type Minute = '00' | '30';
type TimeString = `${Hour}:${Minute}`;

export type OptimalChargingTimeRangeInputProps = {
	rangeValue: number;
	onChange: (event: number) => void;
};

interface DayTimeType {
	date: string;
	time: TimeString;
}

export interface OptimalChargingTimeResponseType {
	start: DayTimeType;
	end: DayTimeType;
	averageCleanEnergyPercent: number;
}

export interface IconContainerProps {
	children: React.ReactNode;
}
