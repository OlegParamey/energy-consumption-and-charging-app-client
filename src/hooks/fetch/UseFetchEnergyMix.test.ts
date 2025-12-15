import { renderHook, waitFor } from '@testing-library/react';
import UseFetchEnergyMix from './UseFetchEnergyMix';
import { URL_GET_GENERATION_MIX_FOR_THREE_NEXT_DAYS } from '../../consts';

global.fetch = jest.fn();

describe('UseFetchEnergyMix', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	it('Should initialize with loading state', () => {
		(global.fetch as jest.Mock).mockImplementation(
			() => new Promise(() => {}) // unresolved fetch
		);

		const { result } = renderHook(() => UseFetchEnergyMix());

		expect(result.current.loading).toBe(true);
		expect(result.current.data).toBe(null);
		expect(result.current.error).toBe(null);
	});

	it('Should fetch and return data successfully', async () => {
		const mockData = [
			{ source: 'solar', value: 30 },
			{ source: 'wind', value: 25 },
			{ source: 'hydro', value: 45 },
		];

		(global.fetch as jest.Mock).mockResolvedValueOnce({
			ok: true,
			json: async () => mockData,
		});

		const { result } = renderHook(() => UseFetchEnergyMix());

		await waitFor(() => {
			expect(result.current.loading).toBe(false);
		});

		expect(result.current.data).toEqual(mockData);
		expect(result.current.error).toBe(null);
		expect(global.fetch).toHaveBeenCalledTimes(1);
		expect(global.fetch).toHaveBeenCalledWith(
			URL_GET_GENERATION_MIX_FOR_THREE_NEXT_DAYS
		);
	});

	it('Should handle fetch error with Error instance', async () => {
		const errorMessage = 'Network error';
		(global.fetch as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

		const { result } = renderHook(() => UseFetchEnergyMix());

		await waitFor(() => {
			expect(result.current.loading).toBe(false);
		});

		expect(result.current.data).toBe(null);
		expect(result.current.error).toBe(errorMessage);
	});

	it('Should set loading to false after successful fetch', async () => {
		const mockData = [{ source: 'nuclear', value: 50 }];

		(global.fetch as jest.Mock).mockResolvedValueOnce({
			ok: true,
			json: async () => mockData,
		});

		const { result } = renderHook(() => UseFetchEnergyMix());

		expect(result.current.loading).toBe(true);

		await waitFor(() => {
			expect(result.current.loading).toBe(false);
		});

		expect(result.current.data).toEqual(mockData);
	});

	it('Should set loading to false after failed fetch', async () => {
		(global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));

		const { result } = renderHook(() => UseFetchEnergyMix());

		expect(result.current.loading).toBe(true);

		await waitFor(() => {
			expect(result.current.loading).toBe(false);
		});

		expect(result.current.error).toBe('Failed to fetch');
	});
});
