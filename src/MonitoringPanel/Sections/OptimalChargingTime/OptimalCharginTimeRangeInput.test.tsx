import { render, screen, fireEvent } from '@testing-library/react';
import OptimalChargingTimeRangeInput from './OptimalChargingTimeRangeInput';

describe('OptimalChargingTimeRangeInput', () => {
	const mockOnChange = jest.fn();
	const defaultProps = {
		rangeValue: 3,
		onChange: mockOnChange,
	};

	beforeEach(() => {
		mockOnChange.mockClear();
	});

	it('Renders with initial value and has correct input attributes', () => {
		render(<OptimalChargingTimeRangeInput {...defaultProps} />);

		const rangeInput = screen.getByRole('slider');
		expect(rangeInput).toHaveAttribute('type', 'range');
		expect(rangeInput).toHaveAttribute('min', '1');
		expect(rangeInput).toHaveAttribute('max', '6');
		expect(rangeInput).toHaveAttribute('step', '1');
		expect(rangeInput).toHaveAttribute('id', 'optimal-charge-duration-range-input');
		expect(rangeInput).toBeInTheDocument();
		expect(rangeInput).toHaveValue('3');
		expect(screen.getByText(3)).toBeInTheDocument();
	});

	it('Updates temp value on change without calling onChange', () => {
		render(<OptimalChargingTimeRangeInput {...defaultProps} />);

		const rangeInput = screen.getByRole('slider');
		fireEvent.change(rangeInput, { target: { value: 5 } });

		expect(screen.getByText('5')).toBeInTheDocument();
		expect(mockOnChange).not.toHaveBeenCalled();
	});

	it('Calls onChange on mouse up', () => {
		render(<OptimalChargingTimeRangeInput {...defaultProps} />);

		const rangeInput = screen.getByRole('slider');
		fireEvent.change(rangeInput, { target: { value: 4 } });
		fireEvent.mouseUp(rangeInput);

		expect(mockOnChange).toHaveBeenCalledWith(4);
		expect(mockOnChange).toHaveBeenCalledTimes(1);
	});

	it('Calls onChange on mouse leave', () => {
		render(<OptimalChargingTimeRangeInput {...defaultProps} />);

		const rangeInput = screen.getByRole('slider');
		fireEvent.change(rangeInput, { target: { value: 2 } });
		fireEvent.mouseLeave(rangeInput);

		expect(mockOnChange).toHaveBeenCalledWith(2);
		expect(mockOnChange).toHaveBeenCalledTimes(1);
	});

	it('Calls onChange on touch end', () => {
		render(<OptimalChargingTimeRangeInput {...defaultProps} />);

		const rangeInput = screen.getByRole('slider');
		fireEvent.change(rangeInput, { target: { value: 6 } });
		fireEvent.touchEnd(rangeInput);

		expect(mockOnChange).toHaveBeenCalledWith(6);
		expect(mockOnChange).toHaveBeenCalledTimes(1);
	});

	it('Handles multiple changes before triggering onChange', () => {
		render(<OptimalChargingTimeRangeInput {...defaultProps} />);

		const rangeInput = screen.getByRole('slider');
		fireEvent.change(rangeInput, { target: { value: 2 } });
		fireEvent.change(rangeInput, { target: { value: 4 } });
		fireEvent.change(rangeInput, { target: { value: 5 } });
		fireEvent.mouseUp(rangeInput);

		expect(mockOnChange).toHaveBeenCalledWith(5);
		expect(mockOnChange).toHaveBeenCalledTimes(1);
	});

	it('Renders and calls onChange with minimum value', () => {
		render(<OptimalChargingTimeRangeInput rangeValue={1} onChange={mockOnChange} />);

		const rangeInput = screen.getByRole('slider');
		fireEvent.mouseUp(rangeInput);
		expect(rangeInput).toHaveValue('1');
		expect(screen.getByText(1)).toBeInTheDocument();
		expect(mockOnChange).toHaveBeenCalledWith(1);
	});

	it('Renders and calls onChange with maximum value', () => {
		render(<OptimalChargingTimeRangeInput rangeValue={6} onChange={mockOnChange} />);

		const rangeInput = screen.getByRole('slider');
		fireEvent.mouseUp(rangeInput);
		expect(rangeInput).toHaveValue('6');
		expect(screen.getByText(6)).toBeInTheDocument();
		expect(mockOnChange).toHaveBeenCalledWith(6);
	});
});
