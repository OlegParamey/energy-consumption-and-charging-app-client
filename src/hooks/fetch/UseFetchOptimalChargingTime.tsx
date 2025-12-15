import { useState, useEffect } from 'react';
import type { OptimalChargingTimeResponseType } from '../../MonitoringPanel/Sections/OptimalChargingTime/OptimalChargingTime.type';
import type { CacheItem, FetchDataReturn } from './UseFetch.types';

const CACHE_TTL = 30 * 60 * 1000;
const cache = new Map<string, CacheItem>();

const UseFetchOptimalChargingTime = (
	url: string
): FetchDataReturn<OptimalChargingTimeResponseType> => {
	const [state, setState] = useState<{
		data: OptimalChargingTimeResponseType | null;
		loading: boolean;
		error: string | null;
	}>({
		data: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		const controller = new AbortController();

		const fetchData = async () => {
			const cached = cache.get(url);
			const now = Date.now();

			if (cached && now - cached.timestamp < CACHE_TTL) {
				setState({
					data: cached.data,
					loading: false,
					error: null,
				});
				return;
			}

			setState((prev) => ({ ...prev, loading: true }));

			try {
				const response = await fetch(url, {
					signal: controller.signal,
				});
				const result: OptimalChargingTimeResponseType = await response.json();

				cache.set(url, {
					data: result,
					timestamp: now,
				});

				setState({ data: result, loading: false, error: null });
			} catch (error) {
				if ((error as Error).name === 'AbortError') return;

				setState({
					data: null,
					loading: false,
					error: error instanceof Error ? error.message : 'Unknown error',
				});
			}
		};

		fetchData();

		return () => {
			controller.abort();
		};
	}, [url]);

	return state;
};

export default UseFetchOptimalChargingTime;
