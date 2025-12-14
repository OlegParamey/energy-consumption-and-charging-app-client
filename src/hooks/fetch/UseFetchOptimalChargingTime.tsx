import { useState, useEffect } from 'react';
import type { OptimalChargingTimeResponseType } from '../../MonitoringPanel/Sections/OptimalChargeTime/OptimalChargeTime.type';
import type { FetchDataReturn } from './UseFetch.types';

const UseFetchOptimalChargingTime = (
	url: string
): FetchDataReturn<OptimalChargingTimeResponseType> => {
	const [data, setData] = useState<OptimalChargingTimeResponseType | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await fetch(url);

				const result: OptimalChargingTimeResponseType = await response.json();
				setData(result);
				setError(null);
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message);
				} else {
					throw error;
				}
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url]);

	return { data, loading, error };
};

export default UseFetchOptimalChargingTime;
