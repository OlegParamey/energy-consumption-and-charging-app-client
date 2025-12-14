import { useState, useEffect } from 'react';
import type { EnergyMixResponseArrayType } from '../../MonitoringPanel/Sections/EnergyPieChart/EnergyPieChart.types';
import type { FetchDataReturn } from './UseFetch.types';

const UseFetchEnergyMix = (url: string): FetchDataReturn<EnergyMixResponseArrayType> => {
	const [data, setData] = useState<EnergyMixResponseArrayType | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await fetch(url);

				const result: EnergyMixResponseArrayType = await response.json();
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

export default UseFetchEnergyMix;
