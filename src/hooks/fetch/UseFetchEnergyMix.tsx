import { useState, useEffect } from 'react';
import type { EnergyMixResponseArrayType } from '../../MonitoringPanel/Sections/EnergyPieChart/EnergyPieChart.types';
import type { FetchDataReturn } from './UseFetch.types';
import { URL_GET_GENERATION_MIX_FOR_THREE_NEXT_DAYS } from '../../consts.ts';

const UseFetchEnergyMix = (): FetchDataReturn<EnergyMixResponseArrayType> => {
	const [data, setData] = useState<EnergyMixResponseArrayType | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await fetch(URL_GET_GENERATION_MIX_FOR_THREE_NEXT_DAYS);

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
	}, []);

	return { data, loading, error };
};

export default UseFetchEnergyMix;
