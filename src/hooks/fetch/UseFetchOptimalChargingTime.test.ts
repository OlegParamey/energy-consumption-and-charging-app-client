import { renderHook, waitFor } from '@testing-library/react';
import UseFetchOptimalChargingTime from './UseFetchOptimalChargingTime';
import type { OptimalChargingTimeResponseType } from '../../MonitoringPanel/Sections/OptimalChargingTime/OptimalChargingTime.type';

const mockResponse: OptimalChargingTimeResponseType = {
	start: {
		date: '2025-01-01',
		time: '22:00',
	},
	end: {
		date: '2025-01-02',
		time: '06:00',
	},
	averageCleanEnergyPercent: 75,
};

describe('UseFetchOptimalChargingTime', () => {
	const url = '/api/optimal-charging';

	beforeEach(() => {
		jest.clearAllMocks();

		global.fetch = jest.fn().mockResolvedValue({
			json: jest.fn().mockResolvedValue(mockResponse),
		}) as jest.Mock;
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	test('Returns loading initially and then data', async () => {
		const { result } = renderHook(() => UseFetchOptimalChargingTime(url));

		expect(result.current.loading).toBe(true);
		expect(result.current.data).toBeNull();

		await waitFor(() => {
			expect(result.current.loading).toBe(false);
		});

		expect(result.current.data).toEqual(mockResponse);
		expect(result.current.error).toBeNull();
		expect(fetch).toHaveBeenCalledTimes(1);
	});

	test('Handles fetch error correctly', async () => {
		(fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

		const { result } = renderHook(() => UseFetchOptimalChargingTime('/error-url'));

		await waitFor(() => {
			expect(result.current.loading).toBe(false);
		});

		expect(result.current.data).toBeNull();
		expect(result.current.error).toBe('Network error');
	});

	test('Aborts fetch on unmount', () => {
		const abortSpy = jest.spyOn(AbortController.prototype, 'abort');

		(fetch as jest.Mock).mockImplementation(() => new Promise(() => {}));

		const { unmount } = renderHook(() => UseFetchOptimalChargingTime('/abort-test'));

		unmount();

		expect(abortSpy).toHaveBeenCalled();
	});
});
