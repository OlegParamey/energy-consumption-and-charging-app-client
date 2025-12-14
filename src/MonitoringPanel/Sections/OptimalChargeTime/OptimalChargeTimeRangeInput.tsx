import type { OptimalChargeTimeRangeInputProps } from './OptimalChargeTime.type';

const OptimalChargeTimeRangeInput: React.FC<OptimalChargeTimeRangeInputProps> = ({
	rangeValue,
	onChange,
}) => {
	return (
		<div className="rounded-xl border border-gray-200 bg-white p-6">
			<div className="flex flex-col gap-4">
				<label
					className="text-lg font-medium text-gray-900"
					htmlFor="optimal-charge-duration-range-input"
				>
					Select charging time{' '}
					<span className="text-gray-500 text-base">(from 1 to 6 hours)</span>
				</label>
				<div className="flex w-full items-center gap-4">
					<input
						className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-emerald-500"
						id="optimal-charge-duration-range-input"
						max="6"
						min="1"
						step="1"
						type="range"
						value={rangeValue}
						onChange={(event) => onChange(event.currentTarget.value)}
					/>
					<span className="flex h-10 w-12 items-center justify-center rounded-lg border border-gray-300 bg-gray-50 text-base font-medium text-gray-900">
						{rangeValue}
					</span>
				</div>
			</div>
		</div>
	);
};
export default OptimalChargeTimeRangeInput;
