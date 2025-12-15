import generateDisplayDataForGenerationMix from './generateDisplayData';

test('Generates display data where every energy fuel has value', () => {
	const inputData = {
		biomass: 5,
		coal: 10,
		imports: 15,
		gas: 20,
		nuclear: 25,
		other: 5,
		hydro: 8,
		solar: 6,
		wind: 6,
	};

	const result = generateDisplayDataForGenerationMix(inputData);

	expect(result).toEqual([
		{ value: 5, label: 'Biomass', color: '#00a779' },
		{ value: 10, label: 'Coal', color: '#424242' },
		{ value: 15, label: 'Imports', color: '#ff2f92' },
		{ value: 20, label: 'Gas', color: '#ab56ff' },
		{ value: 25, label: 'Nuclear', color: '#ffd441' },
		{ value: 5, label: 'Other', color: '#a9a9a9' },
		{ value: 8, label: 'Hydro', color: '#00d4fb' },
		{ value: 6, label: 'Solar', color: '#ffa900' },
		{ value: 6, label: 'Wind', color: '#4180ff' },
	]);
});

test('Generates display data where not every energy fuel has value', () => {
	const inputData = {
		biomass: 5,
		coal: 10,
		imports: 35,
		gas: 0,
		nuclear: 25,
		other: 13,
		hydro: 0,
		solar: 0,
		wind: 12,
	};

	const result = generateDisplayDataForGenerationMix(inputData);

	expect(result).toEqual([
		{ value: 5, label: 'Biomass', color: '#00a779' },
		{ value: 10, label: 'Coal', color: '#424242' },
		{ value: 35, label: 'Imports', color: '#ff2f92' },
		{ value: 0, label: 'Gas', color: '#ab56ff' },
		{ value: 25, label: 'Nuclear', color: '#ffd441' },
		{ value: 13, label: 'Other', color: '#a9a9a9' },
		{ value: 0, label: 'Hydro', color: '#00d4fb' },
		{ value: 0, label: 'Solar', color: '#ffa900' },
		{ value: 12, label: 'Wind', color: '#4180ff' },
	]);
});
