import { useState } from 'react';
import UseFetchOptimalChargingTime from '../../../hooks/fetch/UseFetchOptimalChargingTime';
import OptimalChargingTimeRangeInput from './OptimalChargingTimeRangeInput';
import OptimalChargingTimeDisplay from './OptimalChargingTimeDisplay';
import OptimalChargingTimeDataLoading from '../../../components/Loading/OptimalChargingTime/OptimalChargingTimeDataLoading';
import OptimalChargingTimeDataError from '../../../components/Error/OptimalChargingTime/OptimalChargingTimeDataError';
import { URL_GET_OPTIMAL_CHARGING_WINDOW_TIME } from '../../../consts';
const OptimalChargingTimeSection = () => {
	const [rangeValue, setRangeValue] = useState<number>(1);

	const URL = `${URL_GET_OPTIMAL_CHARGING_WINDOW_TIME}?hours=${rangeValue}`;
	const { data, loading, error } = UseFetchOptimalChargingTime(URL);
	return (
		<section className="">
			<h2 className="px-1 pb-4 pt-5 text-2xl sm:text-3xl font-bold text-gray-800">
				Find the best charging window time
			</h2>

			<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
				<OptimalChargingTimeRangeInput
					rangeValue={rangeValue}
					onChange={setRangeValue}
				/>
				{error !== null && !loading && (
					<OptimalChargingTimeDataError error={error} />
				)}
				{error === null && loading && <OptimalChargingTimeDataLoading />}
				{error === null && !loading && data != null && (
					<OptimalChargingTimeDisplay data={data} rangeValue={rangeValue} />
				)}
			</div>
		</section>
	);
};

export default OptimalChargingTimeSection;
