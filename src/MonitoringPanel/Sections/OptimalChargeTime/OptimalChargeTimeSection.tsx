import { useState } from 'react';
import UseFetchOptimalChargingTime from '../../../hooks/fetch/UseFetchOptimalChargingTime';
import OptimalChargeTimeRangeInput from './OptimalChargeTimeRangeInput';
import OptimalChargeTimeDisplay from './OptimalChargeTimeDisplay';

const OptimalChargeTimeSection = () => {
	const [rangeValue, setRangeValue] = useState<string>('1');
	const URL = `http://localhost:3000/optimal-charging-window-time?hours=${rangeValue}`;
	const { data, loading, error } = UseFetchOptimalChargingTime(URL);
	console.log(loading, error);
	return (
		<section>
			<h2 className="px-1 pb-4 pt-5 text-2xl font-bold text-gray-900">
				Find the best time to charge
			</h2>

			<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
				<OptimalChargeTimeRangeInput
					rangeValue={rangeValue}
					onChange={setRangeValue}
				/>
				{data !== null && <OptimalChargeTimeDisplay data={data} />}
			</div>
		</section>
	);
};

export default OptimalChargeTimeSection;
