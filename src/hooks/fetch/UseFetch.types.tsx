import type { OptimalChargingTimeResponseType } from '../../MonitoringPanel/Sections/OptimalChargingTime/OptimalChargingTime.type';

export type FetchDataReturn<DataType> = {
	data: DataType | null;
	loading: boolean;
	error: string | null;
};

export type CacheItem = {
	data: OptimalChargingTimeResponseType;
	timestamp: number;
};
